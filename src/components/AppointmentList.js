import Home from "../pages/Home";
import AppointmentRow from "./AppointmentRow";
import "../styles/barebones.css"; 

function AppointmentList({ appointments }) {
  const appointmentRow = appointments.map((appointment) => (
    <AppointmentRow key={appointment.id} appointment={appointment} />
  ));

  return (
    <div>
      <table className="u-full-width">
        <thead>
          <tr>
            <th scope="col">Doctor</th>
            <th scope="col">Patient</th>
            <th scope="col">Date</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>{appointmentRow}</tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
