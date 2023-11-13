import EducationData from "./EducationData";
import SubSectionDisplay from "../SubSectionDisplay";

function EducationInfoSubSection({ education }) {
  return (
    <div className="education-data-subsection resume-subsection">
      <SubSectionDisplay
        subSectionArray={education}
        InfoComponent={EducationData}
        title="Education"
      />
    </div>
  );
}
export default EducationInfoSubSection;
