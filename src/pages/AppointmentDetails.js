import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BASE_URL = "http://localhost:9292";

const AppTable = styled.table`
  margin: auto;

  border-collapse: collapse;

  td,
  th {
    border: 1px solid #dddddd;
    padding: 8px;
  }

  td.left-column {
    text-align: right;
    width: 30%;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

function AppointmentDetails() {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    fetch(BASE_URL + `/appointments/${id}`)
      .then((r) => r.json())
      .then((appointment) => setAppointment(appointment));
  }, []);

  if (!appointment) return <h2>Loading appointment data...</h2>;

  return (
    <div>
      <AppTable>
        <tr>
          <td className="left-column">Date</td>
          <td className="right-column">
            {appointment.appointment_date === null
              ? ""
              : appointment.appointment_date}
          </td>
        </tr>
        <tr>
          <td className="left-column">Duration</td>
          <td className="right-column">
            {appointment.appointment_duration === null
              ? ""
              : appointment.appointment_duration}{" "}
            minutes
          </td>
        </tr>
        <tr>
          <td className="left-column">Type</td>
          <td className="right-column">
            {appointment.appointment_type === null
              ? ""
              : appointment.appointment_type}
          </td>
        </tr>
        <tr>
          <td className="left-column">Reason</td>
          <td>
            {appointment.appointment_reason === null
              ? ""
              : appointment.appointment_reason}
          </td>
        </tr>

        {/*****************


        <tr>
          <td className="left-column">Doctor's name</td>
          <td>
            {appointment.doctor.doctor_lastname === null ? "" : appointment.doctor.doctor_lastname},{" "}
            {appointment.doctor.doctor_firstname === null ? "" : appointment.doctor.doctor_firstname}
          </td>
        </tr>

        <tr>
          <td className="left-column">Doctor's email</td>
          <td>{appointment.doctor.doctor_email === null ? "" : appointment.doctor.doctor_email}</td>
        </tr>
        <tr>
          <td className="left-column">Doctor's phone</td>
          <td>{appointment.doctor.doctor_phone === null ? "" : appointment.doctor.doctor_phone}</td>
        </tr>
        <tr>
          <td className="left-column">Patient's name</td>
          <td>
            {appointment.patient.patient_lastname === null ? "" : appointment.patient.patient_lastname},{" "}
            {appointment.patient.patient_firstname === null ? "" : appointment.patient.patient_firstname}
          </td>
        </tr>
        <tr>
          <td className="left-column">Patient's phone</td>
          <td>{appointment.patient.patient_phone === null ? "" : appointment.patient.patient_phone}</td>
        </tr>
        <tr>
          <td className="left-column">Patient's email</td>
          <td>{appointment.patient.patient_email === null ? "" : appointment.patient.patient_email}</td>
        </tr>
          *****************/}
      </AppTable>
    </div>
  );
}

export default AppointmentDetails;
