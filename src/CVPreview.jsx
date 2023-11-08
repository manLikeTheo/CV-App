import PersonalDetailsView from "./Components/PersonalDetails/PersonalDetailsView";

function CVPreview({ personalDetails }) {
  return (
    <div className="cv-preview">
      <section>
        <PersonalDetailsView
          fullName={personalDetails.fullName}
          email={personalDetails.email}
          telephone={personalDetails.telephone}
          address={personalDetails.address}
          description={personalDetails.description}
        />
      </section>
    </div>
  );
}
export default CVPreview;
