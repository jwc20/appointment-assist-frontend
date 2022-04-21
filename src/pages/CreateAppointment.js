import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9292/";

function CreateAppointment({ onAddAppointment }) {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentDuration, setAppointmentDuration] = useState("");
  const [appointment_type, setAppointmentType] = useState("");
  const [appointmentReason, setAppointmentReason] = useState("");

  const [doctorLastName, setDoctorLastName] = useState("");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");

  const [patientLastName, setPatientLastName] = useState("");
  const [patientFirstName, setPatientFirstName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [patientCity, setPatientCity] = useState("");
  const [patientState, setPatientState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(BASE_URL + "appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointmentDate: appointmentDate,
        appointmentDuration: appointmentDuration,
        appointment_type: appointment_type,
        appointmentReason: appointmentReason,
        doctorLastName: doctorLastName,
        doctorFirstName: doctorFirstName,
        doctorPhone: doctorPhone,
        doctorEmail: doctorEmail,
        patientLastName: patientLastName,
        patientFirstName: patientFirstName,
        patientPhone: patientPhone,
        patientEmail: patientEmail,
        patientAddress: patientAddress,
        patientCity: patientCity,
        patientState: patientState,
        // doctor_id: doctor_id,
        // patient_id: patient_id,
      }),
    })
      .then((r) => r.json())
      .then((newAppointment) => onAddAppointment(newAppointment));
  }

  function handleAppointmentTypeChange(e) {
    setAppointmentType(e.target.value);
  }


  return (
    <div>
      <p>Hello </p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleAppointmentTypeChange} value={appointment_type} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateAppointment;
