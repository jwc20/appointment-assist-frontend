import AppointmentList from "./AppointmentList";

function AppointmentRow({ appointment }) {
  function handleDetailsClick() {}

  function handleDeleteClick() {}

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

        <button type="button" className="button" onClick={handleDeleteClick}>
          X
        </button>
      </td>
    </tr>
  );
}

export default AppointmentRow;
