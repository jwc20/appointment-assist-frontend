
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9292/";


function Doctors() {
  const [doctors, setDoctors] = useState([]);
  
  useEffect(() => {
    fetch(BASE_URL + "doctors")
      .then(r => r.json())
      .then(doctors => setDoctors(doctors))
  }, []);
  

  return (
    <div>
      <p>This is the Doctors Page</p>
      
      {/*
        {doctors.map((doctor) => (
          <DoctorList key={doctor.id} doctor={doctor} />
        ))}

      */}


    </div>
  )

}

export default Doctors
