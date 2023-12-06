import React, { useState } from "react";
import "./App.css";
import DATA from "./DATA";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import CVPreview from "./CVPreview";
import uniqid from "uniqid";
import EducationForm from "./Components/Education/EducationForm";
import EducationSectionAdd from "./Components/Education/EducationSectionAdd";

function App() {
  // Personal Data
  const [personalData, setPersonalData] = useState(DATA.personalData);
  // SubSections(Education & Work Experience)
  const [subSections, setSubSections] = useState(DATA.subSections);
  // Section Open
  const [subSectionOpen, setSubSectionOpen] = useState(null);
  // Previous State
  const [prevState, setPrevState] = useState(null);

  function handlePersonalDataChange(e) {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
    // console.log(name);
  }

  function handleSubSectionChange(e) {
    const { name, value } = e.target;
    // console.log(value);
    const form = e.target.closest("form.education-form");
    // console.log(form);
    const { id } = form;
    // console.log("FormID:", id);
    const { arrayName } = form.dataset;
    // console.log(arrayName);
    const subSection = subSections[arrayName];
    // console.log(subSection);

    setSubSections({
      ...subSections,
      [arrayName]: subSection.map((obj) => {
        if (obj.id === id) {
          return { ...obj, [name]: value };
        }
        return obj;
      }),
    });

    // UPDATE STATE
    // setSubSections((prevState) => {
    //   const updatedSubSections = { ...prevState };
    //   // console.log("UpdatedSubSections: ", updatedSubSections[arrayName]);
    //   updatedSubSections[arrayName] = prevState[arrayName].map((obj) => {
    //     if (obj.id === id) {
    //       return {
    //         ...obj,
    //         [name]: value,
    //       };
    //     }
    //     return obj;
    //   });
    //   return updatedSubSections;
    // });

    // 1
    // setSubSections((prevState) => ({
    //   ...prevState,
    //   [arrayName]: prevState[arrayName].map((obj) => {
    //     if (obj.id === id) {
    //       return { ...obj, [name]: value };
    //     }
    //     return obj;
    //   }),
    // }));
  }

  // Function to CREATE each SubSection Forms
  function createSubSectionForm(subsectionArray, object) {
    setPrevState(null);
    // Not directly mutating sbSection Array
    const subSectionClone = structuredClone(subSections[subsectionArray]);
    // console.log(subSectionClone);
    subSectionClone.push(object);
    //Update subsections state with the cloned array
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

  function setOpen(subSectionName) {
    return setSubSectionOpen(subSectionName);
  }

  // Function to remove form
  function removeForm(e) {
    // console.log(e.target);
    const form = e.target.closest(".subsection-form");
    // console.log(form);
    const { id } = form;
    // console.log(id);
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
    //Else, if a previous state exist
    //Grab form element
    const subSectionForm = e.target.closest("subsection-form");
    console.log("Cancel FORM", subSectionForm);
    //Extract ID from form
    const { id } = subSectionForm;
    // console.log(id);
    const { arrayName } = subSectionForm.dataset;
    //Reteive the array of forms from the subsections state based on the "arrayName"
    const subSection = subSections[arrayName];
    // console.log(subSection);

    // UPDATE STATE
    setSubSections({
      ...subSections,
      [arrayName]: subSection.map((formObj) => {
        if (formObj.id === id) {
          formObj = prevState;
          formObj.isCollapsed = true;
        }
        return formObj;
      }),
    });
  }

  //Function to toggle Form Values
  function toggleFormValue(e, key) {
    // console.log(e.target);
    const collapsedForm = e.target.closest(".subsection-form");
    // console.log("Collapsed Subsection:", collapsedForm);
    const { id } = collapsedForm;
    // console.log("Collapsed ID:", id);
    const { arrayName } = collapsedForm.dataset;
    // console.log("Collapsed ARRAYNAME: ", arrayName);
    const subSection = subSections[arrayName];
    console.log(subSection);
    setSubSections({
      ...subSections,
      [arrayName]: subSection.map((formObj) => {
        if (formObj.id === id) {
          //create a shallow copy of the formObj
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
            // id={uniqid()}
            // onAdd={addPersonalDetails}
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
        </div>
      </div>

      <div className="cv-preview">
        <CVPreview
          personalDetails={personalData}
          eduSection={subSections.educationArray}
        />
      </div>
    </div>
  );
}

export default App;
