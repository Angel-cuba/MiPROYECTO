import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import './../components/pages/css/one.css'
import { NavLink } from '../components/Navbar/NavbarElements'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Formik, Form } from 'formik'
import { formikUpdate } from '../lib/formikUpdate'

import InputRegister from '../Small-Components/InputRegister'

const One = (card) => {
         const { id }  = useParams()  

   const [title, setTitle ] = useState('')
   const [url, setUrl] = useState('')
   const [description, setDescription] = useState('')
 const [ oneData, setoneData ] = useState([])

     const update = async (id) => {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/update/${oneData.id}`,{
               method: 'PUT',
               body: JSON.stringify({
                    title: title,
                    url: url,
                    description: description
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
                         response.json();
                         toast.configure()
                    const registerOK = () => {
                          toast.success('Your registration has been successfully registered', {
                               autoClose: 3000
                          })
                         }     
                         registerOK()
                          }
                    			})
			.catch((error) => {
				console.log('Looks like there was an error: \n', error);
			});
     }
   
       //testing timeago

  useEffect( () =>Links(setoneData) ,[])

const Links = async(setoneData) => {
     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getOne/${id}`)
     const data = await response.json()
     console.log(data[0])
     setoneData(data[0])}
     console.log('esto es el oneData',oneData)

return (
     <>
     <div className="update_one">
          <div className="formik">               
               <div className="update_section">
                 
                         <InputRegister label='Title' name="title" placeholder={oneData.title} 
                         onChange={(event) => setTitle(event.target.value)} className="input_one"/>
                
                    <InputRegister label="Url" type="url" name="url" placeholder={oneData.url}   
                    onChange={(event) => setUrl(event.target.value)}className="input_one"/>
                    <InputRegister label="Description" name="description" placeholder={oneData.description} 
                    onChange = {(event) => setDescription(event.target.value)}className="input_one"/>
                         {/* <div className="button">
                                 <UpdateFunctio id={oneData.id}/>
                         </div> */}
                         <button onClick={(event) => {update(event)}}
                                   className="btn btn-block btn-success"
                         
                         >
                              <NavLink to="/eachUser">
                                   Update
                              </NavLink>
                              </button>
                       
               </div>
          </div>
       
          
              
               {/* http://localhost:8080/comments 
               https://git.heroku.com/miproyectonode.git*/}
     </div>     
     </>
)


}




export default One