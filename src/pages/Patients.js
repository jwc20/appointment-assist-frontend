
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9292/";

function Patients() {

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "patients")
      .then(r => r.json())
      .then(patients => setPatients(patients))
  }, []);

  return (
    <div>
      <p>This is the Patients Page</p>

      {/*
        {patients.map(() => (
        <PatientList key={patient.id} patient={patient} />
        ))}
      */}




    </div>
  )

}

export default Patients
