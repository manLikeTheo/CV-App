import ExpandMode from "../ExpandMode";
import DisplayForms from "../DisplayForms";
import WorkExperienceForm from "./WorkExperienceForm";
import "../../Styles/subSection-add-forms.css";

function WorkExperienceAdd({
  workExperienceArray,
  onChange,
  onCancel,
  onHide,
  isOpen,
  setOpen,
  onRemove,
  toggleCollapsed,
  createForm,
}) {
  return (
    <div className="subSection-add-forms">
      <ExpandMode
        isOpen={isOpen}
        setOpen={setOpen}
        subSectionName="Work Experience"
        icon="fa-solid fa-briefcase"
      />

      <div className={`displayForm-subsection-open ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={workExperienceArray}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          FormComponent={WorkExperienceForm}
          onRemove={onRemove}
          toggleCollapse={toggleCollapsed}
          title="employer"
          arrayName="workExperienceArray"
        />
      </div>
      <button className="work-experience-add" onClick={createForm}>
        + Experience
      </button>
    </div>
  );
}
export default WorkExperienceAdd;
