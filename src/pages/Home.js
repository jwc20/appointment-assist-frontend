import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:9292/";

function Home() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "appointments")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <p>This is the Home Page</p>
    </div>
  );
}

export default Home;
