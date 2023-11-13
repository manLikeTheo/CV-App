import { useState } from "react";
import "./App.css";
import DATA from "./DATA";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import CVPreview from "./CVPreview";
import PersonalDetailsView from "./Components/PersonalDetails/PersonalDetailsView";
import EducationInputForm from "./Components/Education/EducationInputForm";
import EducationData from "./Components/Education/EducationData";

function App() {
  // Personal Data
  const [personalData, setPersonalData] = useState(DATA.personalData);
  // SubSections(Education & Work Experience)
  const [subSections, setSubSections] = useState(DATA.subSections);

  function handlePersonalDataChange(e) {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
    // console.log(name);
  }

  function handleSubSectionChanges(e) {
    const { name } = e.target;
    console.log(name);
    const inputValue = e.target.value;
    // console.log(inputValue);
    const form = e.target.closest(".subsection-form");
    const { id } = form;
    const { subSectionArrayName } = form.dataset;
    // console.log(subSectionArrayName);
    const subSection = subSections[subSectionArrayName];
    setSubSections({
      ...subSections,
      [subSectionArrayName]: subSection.map((subSectionObj) => {
        if (subSectionObj.id === id) subSectionObj[name] = inputValue;
        return subSectionObj; //Return the modified object
      }),
    });
  }

  // Add Personal Details Function.
  function addPersonalDetails(e) {}

  // Reset Personal Details Function.
  function resetPersonalDetails(e) {}

  return (
    <div className="cv-container">
      <div className="forms">
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
        <EducationInputForm onChange={handleSubSectionChanges} />
      </div>

      <div className="cv-preview">
        {/* <CVPreview personalData={DATA}personalData. /> */}
        <PersonalDetailsView
          fullName={personalData.fullName}
          email={personalData.email}
          telephone={personalData.telephone}
          address={personalData.address}
          description={personalData.description}
        />
        {/* <EducationData degree={subSections}/> */}
      </div>
    </div>
  );
}

export default App;
