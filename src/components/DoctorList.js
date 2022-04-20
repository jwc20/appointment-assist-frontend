import Doctors from "../pages/Doctors";
import DoctorRow from "./DoctorRow";

function DoctorList({ doctors }) {
  const doctorRow = doctors.map((doctor) => (
    <DoctorRow key={doctor.doctor_id} doctor={doctor} />
  ));

  return (
    <div>
      <table className="u-full-width">
        <thead>
          <tr>
            <th scope="col">Last Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>{doctorRow}</tbody>
      </table>
    </div>
  );
}

export default DoctorList;
