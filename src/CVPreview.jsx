import "./Styles/CVPreview.css";
import PersonalDetailsView from "./Components/PersonalDetails/PersonalDetailsView";
import EducationSubSectionView from "./Components/Education/EducationSubSectionView";
import EducationDataView from "./Components/Education/EducationDataView";

function CVPreview({ personalDetails, eduSection }) {
  return (
    <div className="cv-preview">
      <section className="cv">
        <PersonalDetailsView {...personalDetails} />
        {eduSection.map((eduObj) => (
          <EducationDataView
            key={eduObj.id}
            {...eduObj}
            // institution={eduObj.institution}
            // degree={eduObj.degree}
            // start={eduObj.start}
            // end={eduObj.end}
            // location={eduObj.location}
          />
        ))}
      </section>
    </div>
  );
}
export default CVPreview;
