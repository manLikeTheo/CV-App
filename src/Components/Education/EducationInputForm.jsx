import InputField from "../InputField";

function EducationInputForm(props) {
  const { degree, institution, location, start, end, id } = props.form;
  const { onChange } = props;

  return (
    <form
      className="education-input-form subsection-form"
      id={id}
      data-array-name="educations"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputField
        type="text"
        id="institution"
        title="Institution"
        placeholder="Enter name of institution"
        value={institution}
        onChange={onChange}
      />
      <InputField
        type="text"
        id="degree"
        title="Degree"
        placeholder="Enter Field of Study"
        value={degree}
        onChange={onChange}
      />
      <fieldset className="dates">
        <InputField
          type="text"
          id="date"
          title="Started"
          placeholder="Enter Start Date"
          value={start}
          onChange={onChange}
        />
        <InputField
          type="text"
          id="date"
          title="Ended"
          placeholder="Enter End Date"
          value={end}
          onChange={onChange}
        />
      </fieldset>
      <InputField
        type="text"
        id="location"
        title="Location"
        placeholder="Enter City/Country of Institution"
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
