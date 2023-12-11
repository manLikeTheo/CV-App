import EducationForm from "./EducationForm";
import DisplayForms from "../DisplayForms";
import ExpandMode from "../ExpandMode";
import "../../Styles/subSection-add-forms.css";

function EducationSectionAdd({
  educationArray,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) {
  return (
    <div className="subSection-add-forms">
      <ExpandMode
        isOpen={isOpen}
        setOpen={setOpen}
        subSectionName="Education"
        icon="fa-solid fa-graduation-cap"
      />

      <div className={`displayForm-subsection-open ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={educationArray}
          FormComponent={EducationForm}
          onCancel={onCancel}
          onChange={onChange}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapse={toggleCollapsed}
          title="institution"
          arrayName="educationArray"
        />
        <button className="add-education-btn" onClick={createForm}>
          + Education
        </button>
      </div>
    </div>
  );
}
export default EducationSectionAdd;
