import './App.css';
import NavBar from './components/NavBar';
import TablePokemon from './components/TablePokemon.jsx';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import SeeDetails from './pages/SeeDetails';
import Main from './pages/Main';


function App() {
  return (
    // <div className='App-header'>
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path='/' element={<Main />}></Route>
        <Route exact path='/Home' element={<Home />}></Route>
        <Route exact path='/SeeDetails/:id' element={<SeeDetails />}></Route>
        
      </Routes>
    </Router>
    // </div>
  );
}

export default App;