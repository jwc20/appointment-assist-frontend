import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Patients from "../pages/Patients";
import AppointmentDetails from "../pages/AppointmentDetails";
import CreateAppointment from '../pages/CreateAppointment';
import "../styles/barebones.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/doctors">
          <Doctors />
        </Route>
        <Route exact path="/patients">
          <Patients />
        </Route>
        <Route path="/appointments/:id">
          <AppointmentDetails />
        </Route>
        <Route path="/create-appointment">
          <CreateAppointment />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
