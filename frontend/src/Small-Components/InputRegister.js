import React from 'react'

export const InputRegister = ({
     type= 'text',
     name,
     className = '',
     ...props
}) => (
     <>
          <label className={`blog ${className}`}>
                    <p className="spanName">{name}</p>
                    <input
                    {...props}
                    ></input>
               </label>
     </>
         
     )

 