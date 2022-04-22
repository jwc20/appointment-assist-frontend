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
  let appointmentDoctor = {};
  let appointmentPatient = {};
  const { id } = useParams();
  const [appointment, setAppointment] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [patient, setPatient] = useState("");
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/doctors")
      .then((r) => r.json())
      .then((doctors) => {
        setDoctors(doctors);
      });
    fetch(BASE_URL + "/patients")
      .then((r) => r.json())
      .then((patients) => setPatients(patients));

    fetch(BASE_URL + `/appointments/${id}`)
      .then((r) => r.json())
      // .then((appointment) => setAppointment(appointment));
      .then((appointment) => {
        setAppointment(appointment);
      });
  }, []);

  patients.forEach((eachPatient) => {
    for (const key in eachPatient) {
      if (appointment.appointment_patient === eachPatient[key]) {
        console.log(eachPatient);
        appointmentPatient = eachPatient;
      }
    }
  });

  doctors.forEach((eachDoctor) => {
    for (const key in eachDoctor) {
      if (appointment.appointment_doctor === eachDoctor[key]) {
        console.log(eachDoctor);
        appointmentDoctor = eachDoctor;
      }
    }
  });
  if (!appointment) return <h2>Loading appointment data...</h2>;

  return (
    <div>
      <AppTable>
        <tbody>
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

          <tr>
            <td className="left-column">Doctor's name</td>
            <td>
              {appointmentDoctor.doctor_lastname === null
                ? ""
                : appointmentDoctor.doctor_lastname}
              ,{" "}
              {appointmentDoctor.doctor_firstname === null
                ? ""
                : appointmentDoctor.doctor_firstname}
            </td>
          </tr>

          <tr>
            <td className="left-column">Doctor's email</td>
            <td>
              {appointmentDoctor.doctor_email === null
                ? ""
                : appointmentDoctor.doctor_email}
            </td>
          </tr>
          <tr>
            <td className="left-column">Doctor's phone</td>
            <td>
              {appointmentDoctor.doctor_phone === null
                ? ""
                : appointmentDoctor.doctor_phone}
            </td>
          </tr>
          <tr>
            <td className="left-column">Patient's name</td>
            <td>
              {appointmentPatient.patient_lastname === null
                ? ""
                : appointmentPatient.patient_lastname}
              ,{" "}
              {appointmentPatient.patient_firstname === null
                ? ""
                : appointmentPatient.patient_firstname}
            </td>
          </tr>
          <tr>
            <td className="left-column">Patient's phone</td>
            <td>
              {appointmentPatient.patient_phone === null
                ? ""
                : appointmentPatient.patient_phone}
            </td>
          </tr>
          <tr>
            <td className="left-column">Patient's email</td>
            <td>
              {appointmentPatient.patient_email === null
                ? ""
                : appointmentPatient.patient_email}
            </td>
          </tr>

          <tr>
            <td className="left-column">Patient's address</td>
            <td>
              {appointmentPatient.patient_address === null
                ? ""
                : appointmentPatient.patient_address}
              {", "}
              {appointmentPatient.patient_city === null
                ? ""
                : appointmentPatient.patient_city}
              {", "}
              {appointmentPatient.patient_state === null
                ? ""
                : appointmentPatient.patient_state}
            </td>
          </tr>
        </tbody>
      </AppTable>
    </div>
  );
}

export default AppointmentDetails;
