
import { useEffect, useState } from "react";
import DoctorList from "../components/DoctorList";

const BASE_URL = "http://localhost:9292/";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  
  useEffect(() => {
    fetch(BASE_URL + "doctors")
      .then(r => r.json())
      .then(doctors => setDoctors(doctors))
  }, []);

  return (
    <div className="list-container">
      <p>This is the Doctors Page</p>
      <DoctorList doctors={doctors}/>
    </div>
  )

}

export default Doctors
