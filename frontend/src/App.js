import NavBar from './components/Navbar/Navbar';
import { useState } from 'react'
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


 
function App() {
const [ auth, setAuth] = useState(
   localStorage.getItem("userJWT")
               ? 
               { jwt: localStorage.getItem("userJWT") }
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
      <Route path="/signUp"><Signup /> </Route>
      <Route path="/about"><About/> </Route>
      <Route path="/eachUser"><About/> </Route>

      <Route path="/" exact><Home/></Route>
   

    </Switch>

      </Router>
    </AuthContext.Provider>
     
        
       
   </>
  );
}

export default App;
