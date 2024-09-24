import './App.css';
import SortingVis from './components/SortingLogic/SortingVis';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';



function App() {
  

  return (
    <Router>
      <div>
        <NavBar></NavBar>
        {/* <SortingVis></SortingVis> */}
        <Routes>
            <Route path="/" element={<SortingVis></SortingVis>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
