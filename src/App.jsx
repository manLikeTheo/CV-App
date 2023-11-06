import { useState } from "react";
import "./App.css";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import CVPreview from "./CVPreview";

function App() {
  const [personalData, setPersonalData] = useState({
    fullName: " ",
    email: " ",
    telephone: " ",
    address: " ",
  });

  const handlePersonalDataChange = (e) => {
    // e.preventDefault();
    const { key, value } = e.target;
    setPersonalData({ ...personalData, [key]: value });
    console.log(value);
  };
  return (
    <div className="cv-container">
      <div className="cv-input-form">
        <PersonalDetails
          fullName={personalData.name}
          email={personalData.email}
          telephone={personalData.telephone}
          address={personalData.address}
          onChange={handlePersonalDataChange}
        />
      </div>

      <div className="cv-preview">
        <CVPreview personalDetails={personalData} />
      </div>
    </div>
  );
}

export default App;
