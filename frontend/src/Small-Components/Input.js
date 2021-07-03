import React from 'react'
import {  ErrorMessage, useField } from 'formik'


const Input = ({
      label,
     // name,
     placeholder,
     type,
     className= '',
     ...props
}) => {
     const [ field, meta] = useField(props)
     // console.log(field, meta)${className}
     return (
          <div className={`out-input `}>
               <label htmlFor={field.name}>{label}</label>
               <input  
               // name = {name}
               className = {className}
               placeholder = {placeholder}
               {...field}
               //{...props}
               autoComplete="off"
                
               />
                   {/*<div className="errorMessage">
                     <ErrorMessage name={field.name} /> <FaApple />
                     
                          
                 <div className="icon" > </div> 
                    
               </div>*/}
              
          </div>
     )
}
export default Input