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
const [ auth, setAuth] = useState()

  return (
    <>
    <AuthContext.Provider value={{auth, setAuth}}>
       <Router>

    <NavBar/>
    <Switch>  
       
      
      <Route path="/Login">
        {auth ? (
           <>
         {/* <NewLinks/>
         <All/>  */}
         
           <EachUser />
      
               
           </>):
            ( 
            <Login />
           )}
      
        
      </Route>
      <Route path="/Blog"> <Blog /></Route>
      <Route path="/Team"><Team /></Route>
      <Route path="/SignUp"><Signup /> </Route>
      <Route path="/About"><About/> </Route>
      <Route path="/"><Home/></Route>
   

    </Switch>

      </Router>
    </AuthContext.Provider>
     
        
       
   </>
  );
}

export default App;
