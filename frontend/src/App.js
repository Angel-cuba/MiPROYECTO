import NavBar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewLinks from './components/NewLink';
import './css/App.css';
import './css/Pages.css';
import All from './readLinks/All';
import Login from './components/pages/Login';
import Blog from './components/pages/Blog'
import Team from './components/pages/Team'
import Signup from './components/pages/Signup'
import About from './components/pages/About'

 
function App() {
  return (
    <div className="App">
      <Router>

    <NavBar/>
    <Switch>
      <Route path="/Login">
         <Login />
      </Route>
      <Route path="/Blog"> <Blog /></Route>
      <Route path="/Team"><Team /></Route>
      <Route path="/SignUp"><Signup /> </Route>
      <Route path="/About"><About/> </Route>
      <Route></Route>

    </Switch>

      </Router>
        
       <NewLinks/>
       <All/>
   </div>
  );
}

export default App;
