import React from 'react'

const InputRegister = ({
     type= 'text',
     name,
     className = '',
     ...props
}) => (
     <>
          <label className={`out-input ${className}`}>
                    <span className="span">{name}</span>
                    <input
                    {...props}
                    ></input>
               </label>
     </>
         
     )

export default InputRegister