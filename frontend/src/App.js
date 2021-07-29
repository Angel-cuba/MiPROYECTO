import NavBar from './components/Navbar/Navbar';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/pages/css/App.css'
// import './components/pages/css/Pages.css'
import Login from './components/pages/Login'
import Blog from './components/pages/Blog'
import Team from './components/pages/Team'
import About from './components/pages/About'
import Home from './components/pages/Home'
import { AuthContext } from './lib/auth/auth.context'
import EachUser from './components/pages/EachUser'
import UserRegister from './components/pages/UserRegister'
import One from './readLinks/One';

 
function App() {
const [ auth, setAuth] = useState(
    localStorage.getItem("jwt")
                ? 
               { jwt: localStorage.getItem("jwt") }
                :   
                  undefined 
)
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
      <Route path="/userRegister"><UserRegister /></Route>
      <Route path="/about"><About/> </Route>
      <Route path="/eachUser"><EachUser/> </Route>
      <Route path="/one/:id"><One/></Route>
      <Route path="/" exact><Home/></Route>
   
    </Switch>
      </Router>
    </AuthContext.Provider>
     
   </>
  );
}
export default App;
