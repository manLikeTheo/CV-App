import "./Styles/CVPreview.css";
import PersonalDetailsView from "./Components/PersonalDetails/PersonalDetailsView";
import EducationSubSectionView from "./Components/Education/EducationSubSectionView";
import WorkExperienceView from "./Components/WorkExperience/WorkExperienceView";

function CVPreview({ personalDetails, eduSection, workExperience }) {
  return (
    <div className="cv-preview">
      <section className="cv">
        <PersonalDetailsView {...personalDetails} />
        <EducationSubSectionView educationArray={eduSection} />
        <WorkExperienceView workExperienceArray={workExperience} />
      </section>
    </div>
  );
}
export default CVPreview;
