import { useEffect, useState } from "react";
import AppointmentList from "../components/AppointmentList";

function Home() {
  function handleCreateAppointmentButton() {}
  const [isDetails] = useState(false);

  return (
    <div>
      <p>This is the Home Page</p>

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
