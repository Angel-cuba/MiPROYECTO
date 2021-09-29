import React from 'react'
import '../pages/css/register.css';

//Importando Formik
import { Formik, Form } from 'formik'
import Input from '../../Small-Components/Input'

import { formikRegister } from '../../lib/FormikRegister'


const UserRegister = () => {
 
 return (
      <>
      <div className="pages">
           <Formik {...formikRegister}>
               {formik => (
               <div className="register">
                    <h1>Usando el Formik</h1>
                         <Form>
                              <Input label="First Name" name="first_name" placeholder="First Name" className="register_firstname"/>
                              <Input label="Last Name" name="last_name" placeholder="Last Name" className="register_lastname"/>
                              <Input label="Email" name="email" placeholder="Email" className="register_email"/>
                              <Input label="Password" name="password" placeholder="Password" className =" register_password"/>
                              <Input label="Confirm Password" name="confirmpassword" placeholder="Confirm your password" className =" register_password"/>
                              <button id="btn" type ="submit" className ="register_btn">Register</button>
                          </Form>  
                    </div> 
                 ) 
                   }              
          </Formik>
     </div>   
     </>
        
     )
}

export default UserRegister
