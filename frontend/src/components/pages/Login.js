import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import '../../css/App.css';
import { useState, useEffect, useContext} from 'react'
// import {Route,  Redirect } from 'react-router-dom'
import Axios from 'axios'
import { AuthContext } from '../lib/auth.context'
import EachUser from './EachUser'




 const Login = () => {
    
 const setAuthContext = useContext(AuthContext)

 const [userEmail, setuserEmail] = useState("")
 const [userPassword, setuserPassword] = useState("")


 const [ LoggedUser, setLoggedUser] = useState("")
 const [ error, setError] = useState("")

  const history = useHistory()



  useEffect(() => {
if(LoggedUser){
const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setLoggedUser(foundUser.results[0]);
    }
}
    
  }, [LoggedUser]);


const login = (e,setAuth, history) => {
   e.preventDefault();

   Axios.post('http://localhost:4000/api/user/login', {
     email: userEmail,
     pass: userPassword
  
   }).then(response =>{
       if(response.data){
         
              console.log('test', response)
           localStorage.setItem('user', JSON.stringify(response));
                 // localStorage.setItem('user', response);

              setAuth(response.data.token)
              setLoggedUser(response.data)

              history.push('/eachUser')
       }
   }).catch(( error )=> {
     setError(error)
  
   })
 } 


 return (
     <>
 {LoggedUser ? (
      <div>
       {LoggedUser.first_name} is logged in
       <h1>desde</h1>

        {/* <Redirect to="eachUser"> */}
                 <EachUser/>
             {/* </Redirect> */}

       

       {/* <h1>hola {LoggedUser.first_name}</h1>
        <button onClick={logout}> Logout</button>  */}
      </div>

 ) : (
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

 
 )}
 </>
     )
}

export default Login