import "../../Styles/PersonalDetails.css";
import InputField from "../InputField";

function PersonalDetails({
  fullName,
  email,
  telephone,
  address,
  description,
  onChange,
}) {
  return (
    <form action="" className="personal-details-form">
      <h2 className="heading">Personal Details</h2>
      <InputField
        type="text"
        id="Full name"
        key="fullName"
        title="Full Name"
        placeholder="Enter First and Last Name"
        value={fullName}
        onChange={onChange}
      />
      <InputField
        type="email"
        id="email"
        key="email"
        title="Email"
        placeholder="Enter valid Email"
        value={email}
        onChange={onChange}
      />
      <InputField
        type="tel"
        id="telephone"
        key="telephone"
        title="Telephone"
        placeholder="Enter Phone Number"
        value={telephone}
        onChange={onChange}
      />
      <InputField
        type="text"
        id="address"
        key="addres"
        title="Address"
        placeholder="Enter Address"
        value={address}
        onChange={onChange}
      />

      <InputField
        type="textarea"
        id="description"
        title="Description"
        placeholder="Short description about yourself"
        value={description}
        onChange={onChange}
      />
    </form>
  );
}
export default PersonalDetails;
