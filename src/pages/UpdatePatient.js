import { useParams } from "react-router-dom";
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

function UpdatePatient() {
  const { id } = useParams();
  const [updatedPatient, setUpdatedDactor] = useState([]);
  const [patient_firstname, setPatientFirstName] = useState("");
  const [patient_lastname, setPatientLastName] = useState("");
  const [patient_phone, setPatientPhone] = useState("");
  const [patient_email, setPatientEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(BASE_URL + `/patients/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        patient_firstname: patient_firstname,
        // patient_lastname: patient_lastname,
        patient_phone: patient_phone,
        patient_email: patient_email,
      }),
    })
      .then((r) => r.json())
      // .then(setUpdatedDactor);
      .then((updatePatient) => {
        console.log(updatedPatient);
        setUpdatedDactor(updatePatient);
      });

    console.log("Updated patient");
  }

  function handlePatientFirstNameChange(e) {
    setPatientFirstName(e.target.value);
  }

  function handlePatientLastNameChange(e) {
    setPatientLastName(e.target.value);
  }

  function handlePatientPhoneChange(e) {
    setPatientPhone(e.target.value);
  }

  function handlePatientEmailChange(e) {
    setPatientEmail(e.target.value);
  }

  return (
    <div>
      <h3 className="pad-left">Update A Patient</h3>

      <FormDiv>
        <form onSubmit={handleSubmit}>
          <div className="grid-container halves">
            <div>
              <label for="appdoc">First Name</label>
              <input
                id="appdoc"
                type="text"
                onChange={handlePatientFirstNameChange}
                value={patient_firstname}
                placeholder="First Name"
                required
              />
            </div>

            {/* <div>
            <label for="appdoc">Last Name</label>
            <input
              id="appdoc"
              type="text"
              onChange={handlePatientLastNameChange}
              value={patient_lastname}
              placeholder="Last Name"
              required
            />
          </div> */}
          </div>

          <div className="grid-container halves">
            <div>
              <label for="appdoc">Phone</label>
              <input
                id="appdoc"
                type="text"
                onChange={handlePatientPhoneChange}
                value={patient_phone}
                placeholder="xxx-xxx-xxxx"
                required
              />
            </div>

            <div>
              <label for="appdoc">Email</label>
              <input
                id="appdoc"
                type="text"
                onChange={handlePatientEmailChange}
                value={patient_email}
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="grid-container full">
            <button type="submit" className="button-primary">
              Submit
            </button>
          </div>
        </form>
      </FormDiv>
    </div>
  );
}

export default UpdatePatient;
