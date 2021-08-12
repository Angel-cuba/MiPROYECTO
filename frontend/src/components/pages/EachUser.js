import React from 'react'
import {NewLinks} from './NewLink'
import { All } from '../../readLinks/All'
import './css/eachUser.css'



 const EachUser = () => {
           return (
        <>
          <div className="each">
                    <div className="contenido">
                          <h1>Cada user viene aqui</h1>
        
               <NewLinks />
                <All /> 
     
                    </div>

          </div>
         
                       
          </>
     )
}

export default EachUser