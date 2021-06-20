import {React, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { NewLinks } from '../NewLink'
import { All } from '../../readLinks/All'
import Axios from 'axios'


 const EachUser = () => {
        const history = useHistory()
 const [ LoggedUser, setLoggedUser] = useState("")

useEffect(() =>
 {
const user = localStorage.getItem('userJWT')
    if(user) {
         
}},
 [])

 const logout = () => {
   localStorage.clear()
   history.push('/')
   window.location.reload()
   }






     return (
          <>
         
                <h1>Cada user viene aqui</h1>
       {LoggedUser} is logged in tttt

                         
                         <NewLinks/>
                              <All />
                    
                         
                         <button onClick={logout}>
                              Logout
                              </button>
             
          
            
                  
          </>
     )
}

export default EachUser