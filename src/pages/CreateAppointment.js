import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9292";

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

  // const [doctorFirstName, setDoctorFirstName] = useState("");
  // const [doctorPhone, setDoctorPhone] = useState("");
  // const [doctorEmail, setDoctorEmail] = useState("");

  // const [doctor_id, setDoctorID] = useState(0);
  // const [patient_id, setPatientID] = useState(0);

  // const [patientFirstName, setPatientFirstName] = useState("");
  // const [patientPhone, setPatientPhone] = useState("");
  // const [patientEmail, setPatientEmail] = useState("");
  // const [patientAddress, setPatientAddress] = useState("");
  // const [patientCity, setPatientCity] = useState("");
  // const [patientState, setPatientState] = useState("");



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
        // doctorFirstName: doctorFirstName,
        // doctorPhone: doctorPhone,
        // doctorEmail: doctorEmail,
        // patientLastName: patientLastName,
        // patientFirstName: patientFirstName,
        // patientPhone: patientPhone,
        // patientEmail: patientEmail,
        // patientAddress: patientAddress,
        // patientCity: patientCity,
        // patientState: patientState,
        // doctor_id: doctor_id,
        // patient_id: patient_id,
      }),
    })
      .then((r) => r.json())
      // .then((newAppointment) => onAddAppointment(newAppointment));

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
  // function handleDoctorIDChange(e) {
  //   setDoctorID(e.target.value);
  // }

  // function handlePatientIDChange(e) {
  //   setPatientID(e.target.value);
  // }

  return (
    <div>
      <p>Hello </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleAppointmentTypeChange}
          value={appointment_type}
          placeholder="type"
        />
        <input
          type="date"
          onChange={handleAppointmentDateChange}
          value={appointment_date}
          placeholder="date"
        />
        <input
          type="number"
          onChange={handleAppointmentDurationChange}
          value={appointment_duration}
          placeholder="duration"
        />
        <input
          type="text"
          onChange={handleAppointmentReasonChange}
          value={appointment_reason}
          placeholder="reason"
        />
        <input
          type="text"
          onChange={handleAppointmentDoctorChange}
          value={appointment_doctor}
          placeholder="Doctor's Lastname"
        />
        <input
          type="text"
          onChange={handleAppointmentPatientChange}
          value={appointment_patient}
          placeholder="Patient's Lastname"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateAppointment;
