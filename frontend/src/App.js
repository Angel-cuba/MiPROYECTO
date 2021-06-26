import NavBar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css'
import './css/Pages.css'
import Login from './components/pages/Login'
import Blog from './components/pages/Blog'
import Team from './components/pages/Team'
import Signup from './components/pages/Signup'
import About from './components/pages/About'
import Home from './components/pages/Home'
import { AuthContext } from './components/lib/auth.context'
import EachUser from './components/pages/EachUser'

import Axios from 'axios'
// import { response } from '../../backend/src/app';
 
function App() {
const [ auth, setAuth] = useState(
    localStorage.getItem("jwt")
                ? 
               { jwt: localStorage.getItem("jwt") }
                :   
                  undefined 
)

useEffect(() => {
    if(localStorage.getItem("jwt")) recoverUser(setAuth)
}, [])

  return (
    <>
    <AuthContext.Provider value={{auth, setAuth}}>
       <Router>

    <NavBar/>
    <Switch>  
      <Route path="/login">

        {auth ? <EachUser/> : <Login/>}
    
      </Route>

      <Route path="/blog"> <Blog /></Route>
      <Route path="/team"><Team /></Route>
      <Route path="/signUp"><Signup /> </Route>
      <Route path="/about"><About/> </Route>
      <Route path="/eachUser"><EachUser/> </Route>
      <Route path="/" exact><Home/></Route>
   
    </Switch>
      </Router>
    </AuthContext.Provider>
     
   </>
  );
}
const recoverUser= async (auth, setAuth) => {
  //  const id = auth.user.id
  await Axios.get(`http://localhost:4000/api/user/data`, {
        headers: {
             "Content-Type": "application/json",
          "Authorization": 'Bearer' + localStorage.getItem("jwt")
        }
    }) 
    .then(response =>{
          if(response){
            console.log(response)
            setAuth({
              ...auth, 
              // token: localStorage.getItem("jwt"),
              user: {first_name: response.authorized.first_name}})
            }
         }
    ) 
    .catch((error) => console.log(error))
    
}

export default App;
