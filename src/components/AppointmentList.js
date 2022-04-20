import Home from "../pages/Home";
import EachAppointment from "./EachAppointment";

function AppointmentList({ appointments }) {
  const appointmentRow = appointments.map((appointment) => (
    <EachAppointment key={appointment.id} appointment={appointment} />
  ));

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Doctor</th>
            <th scope="col">Patient</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>{appointmentRow}</tbody>
      </table>

      {/*

      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.doctor.doctor_lastname},{" "}
            {appointment.patient.patient_lastname},{" "}
            {appointment.appointment_date}
          </li>
        ))}
      </ul>

      */}
    </div>
  );
}

export default AppointmentList;
