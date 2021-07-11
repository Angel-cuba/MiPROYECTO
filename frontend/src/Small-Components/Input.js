import React from 'react'
import { useField, ErrorMessage } from 'formik'
//ErrorMessage,

const Input = ({
      label,
     // name,
     // placeholder,
     type = 'text',
     // className= '',
     ...props
}) => {
     const [ field, meta, helpers ] = useField(props)
//     console.log(field, meta)
     return (
          < >
               <label className="label" htmlFor={field.name}>{label}</label>
               <input  
               // name = {name}
               // className = {className}
               // placeholder = {placeholder}
               {...field} {...props}
               
               autoComplete="off"
               />
               {/* {meta.error ? "error": "no" } */}
               <p className="errorMessage"><ErrorMessage name={field.name}/> </p>
              
                      {/* <FaApple /> */}
                     
                          
              
          </>
     )
}
export default Input