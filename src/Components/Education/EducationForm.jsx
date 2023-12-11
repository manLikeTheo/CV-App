import "../../Styles/SubSection-form.css/";
import InputField from "../InputField";
// import uniqid from "uniqid";

function EducationForm(props) {
  const { institution, degree, start, end, location, id } = props.form;
  const { onChange, add, cancel, remove } = props;

  return (
    <form
      className="education-form subsection-form"
      id={id}
      data-array-name="educationArray"
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <InputField
        type="text"
        name="institution"
        id="institution"
        title="Institution"
        placeholder="Enter School"
        value={institution}
        onChange={(e) => onChange(e)}
      />
      <InputField
        type="text"
        name="degree"
        id="degree"
        title="Degree"
        placeholder="Enter Degree"
        value={degree}
        onChange={(e) => onChange(e)}
      />
      <InputField
        type="text"
        name="start"
        id="start"
        title="Started"
        placeholder="Enter Start Date"
        value={start}
        onChange={(e) => onChange(e)}
      />
      <InputField
        type="text"
        name="end"
        id="end"
        title="End"
        placeholder="Enter Completion Date"
        value={end}
        onChange={(e) => onChange(e)}
      />
      <InputField
        type="text"
        name="location"
        id="location"
        title="Location"
        placeholder="Enter City / Country"
        value={location}
        onChange={(e) => onChange(e)}
      />
      <div className="buttons">
        <button onClick={add} type="submit" className="submit-btn">
          Add
        </button>
        <button onClick={cancel} type="button" className="reset-btn">
          Cancel
        </button>
        <button onClick={remove} className="delete" type="button">
          Delete
        </button>
      </div>
    </form>
  );
}

export default EducationForm;
