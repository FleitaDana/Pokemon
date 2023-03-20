import './App.css';
import NavBar from './components/NavBar';
import TablePokemon from './components/TablePokemon.jsx';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import SeeDetails from './pages/SeeDetails';


function App() {
  return (
    <div className='App-header'>
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/SeeDetails/:id' element={<SeeDetails />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
