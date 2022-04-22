import { useEffect, useState } from "react";
import PatientList from "../components/PatientList";

const BASE_URL = "http://localhost:9292/";

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "patients")
      .then((r) => r.json())
      .then((patients) => setPatients(patients));
  }, []);

  return (
    <div className="list-container">
      <h3>Current Patients</h3>

      <PatientList patients={patients} />
    </div>
  );
}

export default Patients;
