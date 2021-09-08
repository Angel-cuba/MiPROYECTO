import React, { useEffect } from 'react'
import {NewLinks} from './NewLink'
import { All } from '../../readLinks/All'
import './css/eachUser.css'
import Axios from 'axios'




 const EachUser = () => {

// useEffect(() => {
//       userAuth()   
// }, [])
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
// 	const userAuth = () => {
//   Axios.get(`${process.env.REACT_APP_API_USER}/isAuthenticated`,{
//     headers: {
//       "Content-Type" : "application/json",
//       "access-token": localStorage.getItem("jwt")
//     }
//   }).then( response => console.log(response.data))
//     .catch( error => console.log(error))

// }


export default EachUser