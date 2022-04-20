import AppointmentList from "./AppointmentList";

const BASE_URL = "http://localhost:9292/appointments";

function AppointmentRow({ appointment, onDeleteAppointment }) {
  function handleDetailsClick() {}

  function handleDeleteAppointment() {
    fetch(BASE_URL + `/${appointment.id}`, {
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
          onClick={handleDetailsClick}
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
