import React from 'react'
import { useField, ErrorMessage } from 'formik'

const Input = ({
      label,
     type = 'text',
     ...props
}) => {
     const [ field] = useField(props)
     //console.log(field, meta), meta, helpers 
     return (
          < >
               <label className="label" htmlFor={field.name}>{label}</label>
               <input  
               {...field} {...props}
               autoComplete="off"
               />
               <p className="errorMessage"><ErrorMessage name={field.name}/> </p>
          </>
     )
}
export default Input