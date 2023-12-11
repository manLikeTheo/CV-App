import React, { useState } from "react";
import "./App.css";
import DATA from "./DATA";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import CVPreview from "./CVPreview";
import uniqid from "uniqid";
import EducationSectionAdd from "./Components/Education/EducationSectionAdd";
import WorkExperienceAdd from "./Components/WorkExperience/WorkExperienceAdd";

function App() {
  const [personalData, setPersonalData] = useState(DATA.personalData);
  const [subSections, setSubSections] = useState(DATA.subSections);
  const [subSectionOpen, setSubSectionOpen] = useState(null);
  const [prevState, setPrevState] = useState(null);

  function handlePersonalDataChange(e) {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  }

  function handleSubSectionChange(e) {
    const { name, value } = e.target;
    const form = e.target.closest("form.subsection-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const subSection = subSections[arrayName];
    console.log(subSection);

    setSubSections({
      ...subSections,
      [arrayName]: subSection.map((obj) => {
        if (obj.id === id) {
          return { ...obj, [name]: value };
        }
        return obj;
      }),
    });
  }

  function createSubSectionForm(subsectionArray, object) {
    setPrevState(null);
    const subSectionClone = structuredClone(subSections[subsectionArray]);
    subSectionClone.push(object);
    setSubSections({ ...subSections, [subsectionArray]: subSectionClone });
  }

  // Create Education Form
  function createEducationForm() {
    return createSubSectionForm("educationArray", {
      degree: "",
      institution: "",
      location: "",
      start: "",
      end: "",
      isCollapsed: true,
      isNotVisible: false,
      id: uniqid(),
    });
  }

  function createExperienceForm() {
    return createSubSectionForm("workExperienceArray", {
      employer: "",
      position: "",
      location: "",
      job_description: "",
      start: "",
      end: "",
      isCollapsed: true,
      isNotVisible: "false",
      id: uniqid(),
    });
  }

  function setOpen(subSectionName) {
    return setSubSectionOpen(subSectionName);
  }

  function removeForm(e) {
    const form = e.target.closest("form.subsection-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const subSection = subSections[arrayName];
    console.log(subSection);
    setSubSections({
      ...subSections,
      [arrayName]: subSection.filter((formObj) => formObj.id !== id),
    });
  }

  function cancelForm(e) {
    if (prevState == null) {
      removeForm(e);
      return;
    }
    const subSectionForm = e.target.closest("form.subsection-form");
    console.log("Cancel FORM", subSectionForm);
    const { id } = subSectionForm;
    const { arrayName } = subSectionForm.dataset;
    const subSection = subSections[arrayName];

    // UPDATE STATE
    setSubSections({
      ...subSections,
      [arrayName]: subSection.map((formObj) => {
        if (formObj.id === id) {
          //Go back to previous state
          formObj = prevState;
          //Collapse Form
          formObj.isCollapsed = true;
        }
        return formObj;
      }),
    });
  }

  function toggleFormValue(e, key) {
    console.log(e.target);
    const collapsedForm = e.target.closest(".subsection-form");
    const { id } = collapsedForm;
    const { arrayName } = collapsedForm.dataset;
    const subSection = subSections[arrayName];
    console.log(subSection);
    setSubSections({
      ...subSections,
      [arrayName]: subSection.map((formObj) => {
        if (formObj.id === id) {
          //shallow copy of the formObj
          setPrevState({ ...formObj });
          formObj[key] = !formObj[key];
        }
        return formObj;
      }),
    });
  }

  function toggleCollapsed(e) {
    return toggleFormValue(e, "isCollapsed");
  }

  function toggleVisible(e) {
    return toggleFormValue(e, "isNotVisible");
  }

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
          <EducationSectionAdd
            educationArray={subSections.educationArray}
            isOpen={subSectionOpen === "Education"}
            onChange={handleSubSectionChange}
            createForm={createEducationForm}
            setOpen={setOpen}
            onCancel={cancelForm}
            toggleCollapsed={toggleCollapsed}
            onHide={toggleVisible}
            onRemove={removeForm}
          />
          <WorkExperienceAdd
            workExperienceArray={subSections.workExperienceArray}
            isOpen={subSectionOpen === "Work Experience"}
            setOpen={setOpen}
            onChange={handleSubSectionChange}
            onCancel={cancelForm}
            onRemove={removeForm}
            onHide={toggleVisible}
            toggleCollapsed={toggleCollapsed}
            createForm={createExperienceForm}
          />
        </div>
      </div>

      <div className="cv-preview">
        <CVPreview
          personalDetails={personalData}
          eduSection={subSections.educationArray}
          workExperience={subSections.workExperienceArray}
        />
      </div>
    </div>
  );
}

export default App;
