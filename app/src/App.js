import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Personajes from './components/Personajes';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (



    <div>
      

      <header className="App-header">


        <Router>
          <NavBar></NavBar>
          <Routes>

            <Route exact path='/' element={<Main />}></Route>
            <Route exact path='/personajes' element={<Personajes />}></Route>
          </Routes>
        </Router>
      </header>
    </div>

  );
}

export default App;
