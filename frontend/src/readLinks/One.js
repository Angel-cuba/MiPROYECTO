import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import './../components/pages/css/one.css'

import { Formik, Form } from 'formik'
import { formikUpdate } from '../lib/formikUpdate'

import Input from '../Small-Components/Input'

const One = () => {
         const { id }  = useParams()  
          const [ oneData, setoneData ] = useState([])
   
       //testing timeago

  useEffect( () =>Links(setoneData) ,[Links()])

const Links = async(setoneData) => {
     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getOne/${id}`)
     const data = await response.json()
     console.log(data[0])
     setoneData(data[0])}

return (
     <>
     <div className="update_one">
          <div className="formik">
                <Formik {...formikUpdate}>
             {formik => (
                  <div className="update_section">
                    
               <Form>
                    <Input label='Title' name="title" placeholder={oneData.title} className="input_one"/>
                    {/* <p>{oneData.url}</p> */}
                    <Input label="Url" name="url" placeholder={oneData.url} className="input_one"/>
                    <Input label="Description" name="description" placeholder={oneData.description} className="input_one"/>
                          <button type="submit" className="update_btn">Update</button>
               </Form>
                    
               </div>
             )}
               
        </Formik>
          </div>
       
          
              
               {/* http://localhost:8080/comments 
               https://git.heroku.com/miproyectonode.git*/}
     </div>     
     </>
)


}




export default One