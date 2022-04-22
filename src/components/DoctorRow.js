import DoctorList from "./DoctorList";

function DoctorRow({ doctor }) {
  return (
    <tr>
      <td>{doctor.doctor_lastname}</td>
      <td>{doctor.doctor_firstname}</td>
      <td>{doctor.doctor_phone}</td>
      <td>{doctor.doctor_email}</td>
    </tr>
  );
}

export default DoctorRow;
