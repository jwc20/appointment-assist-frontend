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

  const [newAppointment, setNewAppointment] = useState([]);
  const [appointment_date, setAppointmentDate] = useState("");
  const [appointment_duration, setAppointmentDuration] = useState(0);
  const [appointment_type, setAppointmentType] = useState("");
  const [appointment_reason, setAppointmentReason] = useState("");

  const [appointment_doctor, setAppointmentDoctor] = useState("");
  const [appointment_patient, setAppointmentPatient] = useState("");

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
        appointment_doctor: appointment_doctor,
        appointment_patient: appointment_patient,
      }),
    })
      .then((r) => r.json())
      .then((newAppointment) => {
        console.log(newAppointment);
        setNewAppointment(newAppointment);
      });
    console.log("New appointment made.");
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
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <div className="grid-container halves">
          <div>
            <label for="appdoc">Doctor's Name</label>
            <input
              id="appdoc"
              type="text"
              onChange={handleAppointmentDoctorChange}
              value={appointment_doctor}
              placeholder="Doctor's Lastname"
            />
          </div>

          <div>
            <label for="apppat">Patient's Name</label>
            <input
              id="apppat"
              type="text"
              onChange={handleAppointmentPatientChange}
              value={appointment_patient}
              placeholder="Patient's Lastname"
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
  );
}

export default CreateAppointment;
