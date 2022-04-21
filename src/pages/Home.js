import { useEffect, useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Logo from "../components/Logo";
import { useHistory } from "react-router-dom";

function Home() {
  const [isDetails] = useState(false);
  const history = useHistory();

  function handleCreateAppointmentButton() {
    history.push("/create-appointment");
  }

  return (
    <div>
      <p>This is the Home Page</p>
      {/*
        <Logo />
      */}
      <AppointmentList />
      <div class="container">
        <div class="center">
          <button
            type="button"
            className="button-primary"
            onClick={handleCreateAppointmentButton}
          >
            Create an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
