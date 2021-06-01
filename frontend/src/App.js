import NavBar from './components/Navbar';
import NewLinks from './components/NewLink';
import './css/App.css';
import All from './readLinks/All';


function App() {
  return (
    <div className="App">
        <NavBar/>
       <NewLinks/>
       <All/>
   </div>
  );
}

export default App;
