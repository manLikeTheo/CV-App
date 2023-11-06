import PersonalDetailsView from "./Components/PersonalDetails/PersonalDetailsView";

export default function CVPreview({ personalDetails }) {
  return (
    <div className="cv-preview">
      <section>
        <PersonalDetailsView
          fullName={personalDetails.fullName}
          email={personalDetails.email}
          telephone={personalDetails.telephone}
          address={personalDetails.address}
        />
      </section>
    </div>
  );
}
