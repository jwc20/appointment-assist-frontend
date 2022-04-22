import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

function AppointmentDetails({ onUpdateAppointment }) {
  const history = useHistory();
  let appointmentDoctor = {};
  let appointmentPatient = {};
  const { id } = useParams();
  const [appointment, setAppointment] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [patient, setPatient] = useState("");
  const [patients, setPatients] = useState([]);
  const [toBeUpdatedDoctor, setToBeUpdatedDoctor] = useState("");
  const [updatedDoctor, setUpdatedDoctor] = useState("");

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
        console.log(appointment);
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

  function handleUpdateAppointment(e) {
    history.push(`/appointment/update/${appointment.id}`);
  }

  function handleUpdateDoctor(e) {

    fetch(BASE_URL + `/doctors/${appointmentDoctor.id}`)
    .then(r => r.json())
    .then(toBeUpdatedDoctor => {
      console.log(toBeUpdatedDoctor)
      setToBeUpdatedDoctor(toBeUpdatedDoctor);
      history.push(`/doctor/update/${toBeUpdatedDoctor.id}`);
    })


    // fetch(BASE_URL + `/doctors/search/${appointmentDoctor.doctor_lastname}`)
    //   .then((r) => r.json())
    //   .then((toBeUpdatedDoctor) => {
    //     console.log(toBeUpdatedDoctor);

    //     if (Array.isArray(toBeUpdatedDoctor)) {
    //       setToBeUpdatedDoctor(toBeUpdatedDoctor[0]);
    //       history.push(`/doctor/update/${toBeUpdatedDoctor[0].id}`);
    //     } else {
    //       setToBeUpdatedDoctor(toBeUpdatedDoctor);
    //       history.push(`/doctor/update/${toBeUpdatedDoctor.id}`);
    //     }
    //   })
    //   .catch((error) => {
    //     window.alert("Doctor information must be complete.")
    //     // history.push(`/create-doctor`);
    //   });

    // .then((toUpdateDoctor) => {
    //   // console.log(toUpdateDoctor);
    //   if (Array.isArray(toUpdateDoctor)) {
    //     setToUpdateDoctor(toUpdateDoctor[0]);
    //     history.push(`/doctor/update/${toUpdateDoctor[0].id}`);
    //   } else {
    //     setToUpdateDoctor(toUpdateDoctor);
    //     history.push(`/doctor/update/${toUpdateDoctor.id}`);
    //   }
    // })
    // .catch((error) => {
    //   history.push(`/create-doctor`);
    // });
  }

  return (
    <div>
      <AppTable>
        <tbody>
          <tr>
            <td className="left-column">Date</td>
            <td className="right-column">
              {appointment.appointment_date === null ||
              appointment.appointment_date === undefined
                ? ""
                : appointment.appointment_date.toString().split("T")[0]}
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

          {/*******************************************************/}
          <tr>
            <td className="left-column">Doctor's Last Name</td>
            <td>
              {appointmentDoctor.doctor_lastname === null
                ? ""
                : appointmentDoctor.doctor_lastname}
              {/* Temporary fix */}
              {/* {appointment.appointment_doctor === null &&
              appointmentDoctor.doctor_lastname !== null
                ? ""
                : appointment.appointment_doctor} */}
            </td>
          </tr>
          {/*******************************************************/}

          <tr>
            <td className="left-column">Doctor's First Name</td>
            <td>
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
          {/*******************************************************/}

          <tr>
            <td className="left-column">Patient's Last Name</td>
            <td>
              {appointmentPatient.patient_lastname === null
                ? ""
                : appointmentPatient.patient_lastname}

              {/* Temporary fix */}
              {/* {appointment.appointment_patient === null &&
              appointmentPatient.patient_lastname !== null
                ? ""
                : appointment.appointment_patient} */}
            </td>
          </tr>
          {/*******************************************************/}

          <tr>
            <td className="left-column">Patient's First Name</td>
            <td>
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
              {appointmentPatient.patient_address === null ||
              appointmentPatient.patient_address === undefined
                ? ""
                : appointmentPatient.patient_address + ", "}
              {appointmentPatient.patient_city === null ||
              appointmentPatient.patient_city === undefined
                ? ""
                : appointmentPatient.patient_city + ", "}
              {appointmentPatient.patient_state === null
                ? ""
                : appointmentPatient.patient_state}
            </td>
          </tr>
        </tbody>
      </AppTable>

      <div className="grid-container thirds">
        <div>
          <button type="button" onClick={handleUpdateAppointment}>
            Appointment
          </button>
        </div>

        <div>
          <button type="button" onClick={handleUpdateDoctor}>
            Doctor
          </button>
        </div>

        <div>
          <button type="button">Patient</button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDetails;
