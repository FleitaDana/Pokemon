import './App.css';


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import SeeDetails from './pages/SeeDetails';
import Main from './pages/Main';
import NotFound from './components/NotFound';
import Evolutions from './pages/Evolutions';


function App() {
  return (
    // <div className='App-header'>
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path='/' element={<Main />}></Route>
        <Route exact path='/Home' element={<Home />}></Route>
        <Route exact path='/SeeDetails/:id' element={<SeeDetails />}></Route>
        <Route exact path='/Evolutions/:id' element={<Evolutions />}></Route>
        <Route exact path='*' element={<NotFound />}></Route>
      </Routes>
    </Router>
    // </div>
  );
}
export default App;