import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import '../../css/App.css';
import { useState, useEffect, useContext} from 'react'
// import {Route,  Redirect } from 'react-router-dom'
import Axios from 'axios'
import { AuthContext } from '../lib/auth.context'
import EachUser from './EachUser'
import NewLinks from '../NewLink'
import All from '../../readLinks/All'




 const Login = () => {
    
 const setAuthContext = useContext(AuthContext)

 const [userEmail, setuserEmail] = useState("")
 const [userPassword, setuserPassword] = useState("")


 const [ LoggedUser, setLoggedUser] = useState("")
 const [ error, setError] = useState("")

  const history = useHistory()





const login = (e,setAuth, history) => {
   e.preventDefault();

   Axios.post('http://localhost:4000/api/user/login', {
     email: userEmail,
     pass: userPassword
  
   })
   .then(response =>{
       if(response.data.token){
               console.log('test', response)
           localStorage.setItem('userJWT', JSON.stringify(response.data));
              setAuth(response.data.token)
              // console.log(setAuth)
              setLoggedUser(response.data.userDB)
              console.log('user_name',response.data.userDB[0].first_name)

              history.push('/')
       }
   }).catch(( error )=> {
     setError(error)
       console.log('este es el error : ', error)
   })

 } 

 


 return (
            <>
   <div className="login">
      <h1>Login Page</h1>
      <label>Username</label>
      <input 
      type="text"
      id="email"
      placeholder="Email address"
      onChange={(e) => {setuserEmail(e.target.value)}}
      />
      <label>Password</label>
      <input 
      type="text"
      id="password"
      placeholder="Password"
      onChange={(e) => {setuserPassword(e.target.value)}}
      autoComplete="off"/>
           

      <button onClick={(e) =>login(e, setAuthContext.setAuth)}> Login </button>
    </div>
  {error? (<div id="texto-error" className="error"></div>): ("")}
    
    </>


     )
}

export default Login