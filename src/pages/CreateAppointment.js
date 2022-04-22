import { useEffect, useState } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9292";

const FormDiv = styled.div`
  width: 90%;
  margin: auto;
  background: rgb(240, 240, 240);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CreateAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");

  const [newAppointment, setNewAppointment] = useState([]);
  const [appointment_date, setAppointmentDate] = useState("");
  const [appointment_duration, setAppointmentDuration] = useState(0);
  const [appointment_type, setAppointmentType] = useState("");
  const [appointment_reason, setAppointmentReason] = useState("");

  const [appointment_doctor, setAppointmentDoctor] = useState("");
  const [appointment_patient, setAppointmentPatient] = useState("");

  const [doctor_lastname, setDoctorLastName] = useState("");
  const [patient_lastname, setPatientLastName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(BASE_URL + "/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointment_type: appointment_type,
        appointment_date: appointment_date,
        appointment_duration: appointment_duration,
        appointment_reason: appointment_reason,

        // appointment_doctor: appointment_doctor,
        appointment_doctor: doctor_lastname,
        // appointment_patient: appointment_patient,
        appointment_patient: patient_lastname,
      }),
    })
      .then((r) => r.json())
      .then((newAppointment) => {
        console.log(newAppointment);
        setNewAppointment(newAppointment);
      });
    console.log("New appointment made.");

    fetch(BASE_URL + "/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doctor_lastname: doctor_lastname,
      }),
    })
      .then((r) => r.json())
      .then(setDoctor);
    // .then((updateDoctor) => {
    //   console.log(updatedDoctor);
    // });
    console.log("Created a doctor");

    // function handleSubmit(e) {
    //   e.preventDefault();
    //   fetch(BASE_URL + "/doctors", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       doctor_lastname: doctor_lastname,
    //     }),
    //   })
    //     .then((r) => r.json())
    //     .then(setDoctor);
    //   // .then((updateDoctor) => {
    //   //   console.log(updatedDoctor);
    //   // });
    //   console.log("Created a doctor");
    // }

    function handleSubmit(e) {
      e.preventDefault();
      fetch(BASE_URL + "/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patient_lastname: patient_lastname,
        }),
      })
        .then((r) => r.json())
        .then(setPatient);
      // .then((updateDoctor) => {
      //   console.log(updatedDoctor);
      // });
      console.log("Created a patient");
    }
  }

  function handleDoctorLastNameChange(e) {
    setDoctorLastName(e.target.value);
  }

  function handlePatientLastNameChange(e) {
    setPatientLastName(e.target.value);
  }

  function handleAppointmentTypeChange(e) {
    setAppointmentType(e.target.value);
  }

  function handleAppointmentDateChange(e) {
    setAppointmentDate(e.target.value);
  }

  function handleAppointmentDurationChange(e) {
    setAppointmentDuration(e.target.value);
  }

  function handleAppointmentReasonChange(e) {
    setAppointmentReason(e.target.value);
  }

  function handleAppointmentDoctorChange(e) {
    setAppointmentDoctor(e.target.value);
  }

  function handleAppointmentPatientChange(e) {
    setAppointmentPatient(e.target.value);
  }

  return (
    <div>
      <h3 className="pad-left">Create An Apointment</h3>
      <FormDiv>
        <form onSubmit={handleSubmit}>
          <div className="grid-container halves">
            {/* <div>
              <label for="appdoc">Doctor's Name</label>
              <input
                id="appdoc"
                type="text"
                onChange={handleAppointmentDoctorChange}
                value={appointment_doctor}
                placeholder="Doctor's Lastname"
                required
              />
            </div> */}

            <div>
              <label for="appdoc">Doctor's Name</label>
              <input
                id="appdoc"
                type="text"
                onChange={handleDoctorLastNameChange}
                value={doctor_lastname}
                placeholder="Doctor"
              />
            </div>

            {/* <div>
              <label for="apppat">Patient's Name</label>
              <input
                id="apppat"
                type="text"
                onChange={handleAppointmentPatientChange}
                value={appointment_patient}
                placeholder="Patient's Lastname"
                required
              />
            </div> */}

            <div>
              <label for="apppat">Patient's Name</label>
              <input
                id="apppat"
                type="text"
                onChange={handlePatientLastNameChange}
                value={patient_lastname}
                placeholder="Patient"
              />
            </div>
          </div>

          <div className="grid-container thirds">
            <div>
              <label for="appdate">Appointment Date</label>
              <input
                id="appdate"
                type="date"
                onChange={handleAppointmentDateChange}
                value={appointment_date}
                placeholder="date"
                required
              />
            </div>

            <div>
              <label for="appdur">Appointment Duration</label>
              <input
                id="appdur"
                type="number"
                onChange={handleAppointmentDurationChange}
                value={appointment_duration}
                placeholder="duration"
              />
            </div>

            <div>
              <label for="apptype">Appointment Type</label>
              <select
                id="apptype"
                type="text"
                onChange={handleAppointmentTypeChange}
                value={appointment_type}
                placeholder="type"
                required
              >
                <option value="New-Patient">New Patient Evaluation</option>
                <option value="Walk-in">Walk-in</option>
                <option value="Follow-up">Routine Follow-Up</option>
                <option value="Urgent">Urgent Visit</option>
              </select>
            </div>
          </div>

          <div className="grid-container full">
            <label for="appreason">Appointment Reason</label>
            <textarea
              id="appreason"
              className="u-full-width"
              type="text"
              onChange={handleAppointmentReasonChange}
              value={appointment_reason}
              placeholder="reason"
            ></textarea>
          </div>

          <div className="grid-container full">
            <button type="submit" className="button-primary">
              Submit
            </button>
          </div>
        </form>
      </FormDiv>
    </div>
  );
}

export default CreateAppointment;
