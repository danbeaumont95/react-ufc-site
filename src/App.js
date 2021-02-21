import './App.css';
import FightersList from './Components/FightersList';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { Router } from '@reach/router'
import StaffList from './Components/StaffList';
import HomePage from './Components/HomePage';
import Events from './Components/Events'
import SingleFighter from './Components/SingleFighter';
import SingleStaff from './Components/SingleStaff';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
    <Header />
   
    <Router>
    <HomePage path="/"/>
      <FightersList path="/fighters"/>
      <SingleFighter path="/fighters/:full_name"/>
      <SingleStaff path="/staff/:full_name"/>
      <StaffList path="/staff"/>
      <Events path="/events"/>
    </Router>
    
      </header>
    </div>
  );
}

export default App;
