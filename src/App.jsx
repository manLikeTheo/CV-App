import { useState } from "react";
import "./App.css";
import DATA from "./DATA";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import CVPreview from "./CVPreview";
import PersonalDetailsView from "./Components/PersonalDetails/PersonalDetailsView";

function App() {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    address: "",
    description: "",
  });

  // const [personalData, setPersonalData] = useState("");

  function handlePersonalDataChange(e) {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
    console.log(name);
  }

  function updateSection(e) {
    const { name } = e.target.name;
    console.log(name);
    const inputValue = e.target.value;
  }

  // Add Personal Details Function.
  function addPersonalDetails(e) {}

  // Reset Personal Details Function.
  function resetPersonalDetails(e) {}

  return (
    <div className="cv-container">
      <div className="cv-input-form">
        <PersonalDetails
          onChange={handlePersonalDataChange}
          fullName={personalData.fullName}
          email={personalData.email}
          telephone={personalData.telephone}
          address={personalData.address}
          description={personalData.description}
        />
      </div>

      <div className="cv-preview">
        {/* <CVPreview personalDetails={personalData} /> */}
        <PersonalDetailsView
          fullName={personalData.fullName}
          email={personalData.email}
          telephone={personalData.telephone}
          address={personalData.address}
          description={personalData.description}
        />
      </div>
    </div>
  );
}

export default App;
