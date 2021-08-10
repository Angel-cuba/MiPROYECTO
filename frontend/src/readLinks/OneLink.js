import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import './../components/pages/css/one.css'
import { NavLink } from '../components/Navbar/NavbarElements'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Importing Formiks objects
import { Formik, Form } from 'formik'
import { initialValues, validateUpdate } from '../lib/validateForms/validateUpdate'
import Input from '../Small-Components/Input'
 
const OneLink = (card) => {
const { id }  = useParams()  
const [ oneData, setoneData ] = useState([])

//  const useHistory = useHistory()  

const FormikUpdate =  {
  initialValues : initialValues,
  onSubmit: async(values )=> {
       await fetch(`${process.env.REACT_APP_BACKEND_URL}/update/${oneData.id}`,{
               method: 'PUT',
               body: JSON.stringify({
                    title: values.title,
                    url: values.url,
                    description: values.description
               }),
               headers: {
				'Content-Type': 'application/json',
			},
          })
          	.then((response) => {
				if (!response) {
					throw Error(response.statusText);
				}
                    else{
                         toast.configure()
                         const registerOK = () => {
                         toast.success('Your comment has being updated', {
                               autoClose: 3000
                          })
                         }     
                          
                         registerOK()
                               }
                          document.getElementById('btn_back').classList.add('btn_show')
                    			})
			.catch((error) => {
				console.log('Looks like there was an error: \n', error);
			});  
  },
  validationSchema: validateUpdate,
  validateOnChange: true,
  validateOnBlur: false   
}  

useEffect( () =>Links(setoneData) ,[])

const Links = async(setoneData) => {
     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getOne/${id}`)
     const data = await response.json()
     setoneData(data[0])
     }

return (
     <>
     <div className="update_one">
          <Formik {...FormikUpdate}>
               {formik => (
          <div className="formik">     
          <div className="update_section">
               <Form>
                    <Input label='Title' name="title" placeholder={oneData.title} 
                         className="input_one"/>
                    <Input label="Url" type="url" name="url" placeholder={oneData.url}   
                         className="input_one"/>
                    <Input label="Description" name="description" placeholder={oneData.description} 
                         className="input_one"/>

                    <button type="submit" className="update_btn">
                              Update 
                    </button>
                    <button id="btn_back" className="btn btn-block mt-3">
                                        <NavLink to="/eachUser">Go to all comments</NavLink>
                                   </button>
                          
               </Form>                        
          </div>                      
          </div>
          )}
                      
               </Formik>
     </div>     
     </>
)


}




export default OneLink