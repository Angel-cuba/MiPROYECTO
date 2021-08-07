import React from 'react'
import { InputRegister } from '../../Small-Components/InputRegister'


export const NewImage = () => {
   return (
        <>
        <form> 
           <InputRegister type="file" name="image" required/>
           <label htmlFor="image"></label>

           <button type="submit">Upload</button>
        </form>
        </>
   )
}
// regex = “([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)”; 