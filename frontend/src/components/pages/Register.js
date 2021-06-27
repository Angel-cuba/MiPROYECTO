import React, { useState } from 'react'
import '../pages/css/register.css'
import { useHistory } from 'react-router-dom'




const Signup = () => {
const [ firstname, setFirstname ] = useState("")
const [ lastname, setLastname ] = useState("")
const [ email, setEmail ] = useState("")
const [ password, setPassword ] = useState("")

const history = useHistory()

const register = async(e) => {
     
     e.preventDefault()
     await fetch('http://localhost:4000/api/user/register',{
          method: 'POST',
          body: JSON.stringify({
               first_name: firstname,
               last_name: lastname,
               email: email,
               pass: password
                    }),
          headers: {
                'Content-Type': 'application/json'
                    }
})
.then(response => {
     if(!response){
          throw Error(response.statusText)
     }
     response.json()
     history.push('/login')
           })
.then(data => console.log(data))
.catch(error => {
     console.log("Looks like there was an error: \n", error);
})
setFirstname("")
setLastname("")
setEmail("")
setPassword("")

}



    return (
          <div className="pages">
         
          <div className="register">
                <h1>
               Register side
          </h1>
                 <div className="register_firstname">
                 <label>Your first name</label>
               <input 
               type="text"
               id="firstname"
               placeholder="First name"
               onChange={(e) => {setFirstname(e.target.value)}}
               autoFocus
               />
               </div>
               <div className="register_lastname">
                 <label>Your last name</label>
               <input 
               type="text"
               id="lastname"
               placeholder="Last Name"
               onChange={(e) => {setLastname(e.target.value)}}
               autoFocus
               />
               </div>
               <div className="register_email">
               <label>Email</label>
               <input 
               type="text"
               id="email"
               placeholder="Email address"
               onChange={(e) => {setEmail(e.target.value)}}
               autoFocus
               />
               </div>
               <div className="register_password">
               <label>Password</label>
               <input 
               type="text"
               id="password"
               placeholder="Password"
               onChange={(e) => {setPassword(e.target.value)}}
               autoFocus
               />
          </div>
               <button className="register_btn" onClick={(e) => {register(e)}}>Send your info</button>
          </div>
        
          
     </div>
    )
}

export default Signup;