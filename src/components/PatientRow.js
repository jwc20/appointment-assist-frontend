import PatientList from "./PatientList";

function PatientRow({ patient }) {
  return (
    <tr>
      <td>{patient.patient_lastname}</td>
      <td>{patient.patient_firstname}</td>
      <td>{patient.patient_address}</td>
      <td>{patient.patient_city}</td>
      <td>{patient.patient_state}</td>
      <td>{patient.patient_phone}</td>
      <td>{patient.patient_email}</td>
    </tr>
  );
}

export default PatientRow;
