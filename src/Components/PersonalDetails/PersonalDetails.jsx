import "../../Styles/PersonalDetails.css";
import InputField from "../InputField";

function PersonalDetails({
  id,
  fullName,
  email,
  telephone,
  address,
  description,
  onChange,
  onAdd,
  onReset,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault;
      }}
      id={id}
      className="personal-details-form"
    >
      <h2 className="heading">Personal Details</h2>
      <InputField
        name="fullName"
        type="text"
        id="fullName"
        key="fullName"
        title="Full Name"
        placeholder="Enter First and Last Name"
        value={fullName}
        onChange={onChange}
      />
      <InputField
        name="email"
        type="email"
        id="email"
        key="email"
        title="Email"
        placeholder="Enter valid Email"
        value={email}
        onChange={onChange}
      />
      <InputField
        name="telephone"
        type="tel"
        id="telephone"
        key="telephone"
        title="Telephone"
        placeholder="Enter Phone Number"
        value={telephone}
        onChange={onChange}
      />
      <InputField
        name="address"
        type="text"
        id="address"
        key="address"
        title="Address"
        placeholder="Enter Address"
        value={address}
        onChange={onChange}
      />

      <InputField
        name="description"
        type="textarea"
        id="description"
        title="Description"
        placeholder="Short description about yourself"
        value={description}
        onChange={onChange}
      />
      <div className="buttons">
        <button className="add-btn" type="submit" onClick={onAdd}>
          Submit
        </button>
        <button className="reset-btn" type="button" onClick={onReset}>
          Edit
        </button>
      </div>
    </form>
  );
}
export default PersonalDetails;
