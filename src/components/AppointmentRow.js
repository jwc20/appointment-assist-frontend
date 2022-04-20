import AppointmentList from "./AppointmentList";
import AppointmentDetails from "../pages/AppointmentDetails";

const BASE_URL = "http://localhost:9292";

function AppointmentRow({ appointment, onDeleteAppointment, onAppointmentDetails}) {

  function handleAppointmentDetails() {
    fetch(BASE_URL + `/appointments/${appointment.id}`, {
      method: "GET",
    })
      .then((r) => r.json())
      .then(appointment => onAppointmentDetails(appointment));
  }

  function handleDeleteAppointment() {
    fetch(BASE_URL + `/appointments/${appointment.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deleteAppointment) => onDeleteAppointment(deleteAppointment));
  }

  return (
    <tr>
      <td>{appointment.doctor.doctor_lastname}</td>
      <td>{appointment.patient.patient_lastname}</td>
      <td>{appointment.appointment_date}</td>
      <td>{appointment.appointment_duration} minutes</td>
      <td>
        <button
          type="button"
          className="button-primary"
          onClick={handleAppointmentDetails}
        >
          Details
        </button>

        <button
          type="button"
          className="button"
          onClick={handleDeleteAppointment}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default AppointmentRow;
