import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "http://localhost:9292";

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
      <h2>{appointment.appointment_date}</h2>
      <h2>{appointment.appointment_duration} minutes</h2>
      <h2>{appointment.appointment_type}</h2>
      <h2>{appointment.appointment_reason}</h2>
      <h3>
        {appointment.doctor.doctor_lastname},{" "}
        {appointment.doctor.doctor_firstname}
      </h3>
      <h2>{appointment.doctor.doctor_email}</h2>
      <h2>
        {appointment.patient.patient_lastname},{" "}
        {appointment.patient.patient_firstname}
      </h2>
      <h2>{appointment.patient.patient_phone}</h2>
      <h2>{appointment.patient.patient_email}</h2>
    </div>
  );
}

export default AppointmentDetails;
