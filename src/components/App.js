import "./App.css";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Patients from "../pages/Patients";
// import CreateAppointment from '../pages/CreateAppointment'

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/doctors">
        <Doctors />
      </Route>

      <Route exact path="/patients">
        <Patients />
      </Route>

      {/**********************************

      <Route path="/create-appointment">
        <CreateAppointment />
      </Route>

      *********************************/}
    </div>
  );
}

export default App;
