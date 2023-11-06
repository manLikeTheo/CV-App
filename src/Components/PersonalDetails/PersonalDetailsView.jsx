import "../../Styles/PersonalDetailsView.css";

const PersonalDetailsView = ({ fullName, email, telephone, address }) => {
  return (
    <div className="personal-details-view">
      <h1 className="full-name">FullName: {fullName}</h1>
      <div className="contact-details">
        <div className="email">
          <i>Mail:</i>
          <span className="email-address">{email}</span>
        </div>
        <div className="telephone">
          <i>Tel:</i>
          <span className="telephone">{telephone}</span>
        </div>
        <div className="address">
          <i>Address</i>
          <span className="Address">{address}</span>
        </div>
      </div>
    </div>
  );
};
export default PersonalDetailsView;
