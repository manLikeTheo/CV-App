import "./Styles/CVPreview.css";
import PersonalDetailsView from "./Components/PersonalDetails/PersonalDetailsView";
import EducationSubSectionView from "./Components/Education/EducationSubSectionView";
import EducationDataView from "./Components/Education/EducationDataView";
import WorkExperienceView from "./Components/WorkExperience/WorkExperienceView";

function CVPreview({ personalDetails, eduSection, workExperience }) {
  return (
    <div className="cv-preview">
      <section className="cv">
        <PersonalDetailsView {...personalDetails} />
        {/* {eduSection.map((eduObj) => (
          <EducationDataView
            key={eduObj.id}
            {...eduObj}
            // institution={eduObj.institution}
            // degree={eduObj.degree}
            // start={eduObj.start}
            // end={eduObj.end}
            // location={eduObj.location}
          />
        ))} */}
        <EducationSubSectionView educationArray={eduSection} />
        <WorkExperienceView workExperienceArray={workExperience} />
      </section>
    </div>
  );
}
export default CVPreview;
