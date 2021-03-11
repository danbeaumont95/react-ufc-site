import "./App.css";
import Header from "./Components/Header";

import { Router } from "@reach/router";
import HomePage from "./Components/HomePage";
import Events from "./Components/Events";
import StaffList from "./Components/StaffList";
import SingleStaff from "./Components/SingleStaff";
import FightersList from "./Components/FightersList";
import NavBar from "./Components/Navbar";
import SingleFighter from "./Components/SingleFighter";
import FightersByWeight from "./Components/FightersByWeight";
import BackEnd from "./Components/BackEnd";
import Page404 from "./Components/Page404";
import Store from "./Components/Store";
import StoreItemsByType from "./Components/StoreItemsByType";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Header />
        <Router>
          <HomePage path="/" />
          <Events path="/events" />
          <StaffList path="/staff" />
          <SingleStaff path="/staff/:full_name" />
          <FightersList path="/fighters" />
          <SingleFighter path="/fighters/:full_name" />
          <FightersByWeight path="/fighters/weight/:weight" />
          <BackEnd path="/backend" />
          <Store path="/store" />
          <StoreItemsByType path="/store/:type" />
          <Page404 default />
        </Router>
      </header>
    </div>
  );
}

export default App;
