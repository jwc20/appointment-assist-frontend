import NavBar from "./NavBar";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Patients from "../pages/Patients";
import "../styles/barebones.css";

// import CreateAppointment from '../pages/CreateAppointment';
// import AppointmentDetails from '../pages/AppointmentDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
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

      <Route path="/appointment-details">
        <AppointmentDetails />
      </Route>

      *********************************/}
    </div>
  );
}

export default App;
