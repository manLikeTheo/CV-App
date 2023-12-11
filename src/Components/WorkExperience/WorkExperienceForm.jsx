import "../../Styles/SubSection-form.css";
import InputField from "../InputField";

function WorkExperienceForm(props) {
  const { onChange, add, cancel, remove } = props;
  const { employer, position, location, job_description, start, end, id } =
    props.form;

  return (
    <form
      className="work-experience-form subsection-form"
      id={id}
      data-array-name="workExperienceArray"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputField
        type="text"
        name="employer"
        id="employer"
        title="Employer"
        placeholder="Enter Employer"
        value={employer}
        onChange={onChange}
      />
      <InputField
        type="text"
        name="position"
        id="position"
        title="Position"
        placeholder="Enter Position"
        value={position}
        onChange={onChange}
      />
      <InputField
        type="textarea"
        name="job_description"
        id="job_description"
        title="Job Description"
        placeholder="Describe your role briefly"
        value={job_description}
        onChange={onChange}
      />
      <InputField
        type="text"
        name="start"
        id="start"
        title="Start Date"
        placeholder="Enter start date"
        value={start}
        onChange={onChange}
      />
      <InputField
        type="text"
        name="end"
        id="end"
        title="End Date"
        placeholder="Enter end date"
        value={end}
        onChange={onChange}
      />
      <InputField
        type="text"
        name="location"
        id="end"
        title="Location"
        placeholder="Enter Employer Location"
        value={location}
        onChange={onChange}
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
export default WorkExperienceForm;
