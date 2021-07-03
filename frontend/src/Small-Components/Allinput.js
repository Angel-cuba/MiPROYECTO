import React from 'react'

const InputRegister = ({
     type= 'text',
     className = '',
     ...props
}) => (
          <label className={`out-input ${className}`}>
               {/* <span className="span">{placeholder}</span> */}
               <input
               {...props}
               ></input>
          </label>
     )

export default InputRegister