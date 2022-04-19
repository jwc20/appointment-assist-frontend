import "./App.css";
// import Navbar from './Navbar';
import Home from './Home';
// import Doctors from './Doctors'
// import Patients from './Patients'
// import Appointments from './Appointments'


import { Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>

      {/**********************************

      <Route path="/doctors">
        <Doctors />
      </Route>

      <Route path="/patients">
        <Patients />
      </Route>

      <Route path="/create-appointment">
        <CreateAppointment />
      </Route>



        *********************************/}
    </div>
  );
}

export default App;
