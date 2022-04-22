import { useEffect, useState } from "react";
import DoctorList from "../components/DoctorList";
import { useHistory } from "react-router-dom";

const BASE_URL = "http://localhost:9292";

function Doctors() {
  const history = useHistory();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/doctors")
      .then((r) => r.json())
      .then((doctors) => setDoctors(doctors));
  }, []);

  function handleCreateDoctorButton(e) {
    history.push("/create-doctor");
  }

  return (
    <div className="list-container">
      <h3>Current Doctors</h3>
      <DoctorList doctors={doctors} />
      <button
        type="button"
        className="button-primary"
        onClick={handleCreateDoctorButton}
      >
        Create a Doctor
      </button>
    </div>
  );
}

export default Doctors;
