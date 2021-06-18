import {React, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { NewLinks } from '../NewLink'
import { All } from '../../readLinks/All'

 const EachUser = () => {
        const history = useHistory()
 const [ LoggedUser, setLoggedUser] = useState("")

 
const loggedInUser = localStorage.getItem('user');

 
  useEffect(() => {
if(LoggedUser){
const loggedInUser = localStorage.getItem('user', JSON.parse(loggedInUser));
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setLoggedUser(foundUser);
    }
}
    
  }, [LoggedUser]);

 const logout = () => {

   localStorage.clear()
   history.push('/home')

    if(loggedInUser){
         window.location.reload()
    }
  

 }





     return (
          <>
         
                <h1>Cada user viene aqui</h1>
                         
                         <NewLinks/>
                              <All />
                    
                         
                         <button onClick={logout}>
                              Logout
                              </button>
             
          
            
                  
          </>
     )
}

export default EachUser