import "../../Styles/education-input-form.css";
import InputField from "../InputField";

function EducationInputForm({
  degree,
  institution,
  location,
  start,
  end,
  id,
  onChange,
}) {
  // const { degree, institution, location, start, end, id } = props.form;
  // const { onChange } = props;

  return (
    <form
      className="education-input-form subsection-form"
      id={id}
      data-sub-section-array-name="educationArray"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputField
        name="institution"
        type="text"
        id="institution"
        title="Institution"
        placeholder="Enter Name Of Institution"
        value={institution}
        onChange={onChange}
      />
      <InputField
        name="degree"
        type="text"
        id="degree"
        title="Degree"
        placeholder="Enter Field of Study"
        value={degree}
        onChange={onChange}
      />
      <fieldset className="dates">
        <InputField
          name="start"
          type="text"
          id="date"
          title="Started"
          placeholder="Enter Start Date"
          value={start}
          onChange={onChange}
        />
        <InputField
          name="end"
          type="text"
          id="date"
          title="Ended"
          placeholder="Enter End Date"
          value={end}
          onChange={onChange}
        />
      </fieldset>
      <InputField
        name="location"
        type="text"
        id="location"
        title="Location"
        placeholder="City / Country of Institution"
        value={location}
        onChange={onChange}
      />
      <div className="buttons">
        <button className="add-btn" type="button">
          Add
        </button>
        <button className="reset-btn" type="button">
          Reset
        </button>
        <button className="delete-btn" type="button">
          Delete
        </button>
      </div>
    </form>
  );
}

export default EducationInputForm;
