import "../../Styles/PersonalDetailsView.css";

function PersonalDetailsView({
  fullName,
  email,
  telephone,
  address,
  description,
}) {
  return (
    <div className="personal-details-view">
      <h1 className="full-name">{fullName}</h1>
      <div className="contact-details">
        <div className="email">
          <i>Mail: </i>
          <span className="email-text">{email}</span>
        </div>
        <div className="telephone">
          <i>Tel: </i>
          <span className="telephone-text">{telephone}</span>
        </div>
        <div className="address">
          <i>Address: </i>
          <span className="address-text">{address}</span>
        </div>
      </div>
      <div className="description">
        <i>About Me: </i>
        <br />
        <span className="description-text">{description}</span>
      </div>
    </div>
  );
}
export default PersonalDetailsView;
