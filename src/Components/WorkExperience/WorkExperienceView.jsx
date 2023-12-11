import WorkExperienceDisplay from "./WorkExperienceDisplay";
import SubSectionView from "../SubSectionView";

function WorkExperienceView({ workExperienceArray }) {
  return (
    <SubSectionView
      array={workExperienceArray}
      DataComponent={WorkExperienceDisplay}
      title="Work Experience"
    />
  );
}
export default WorkExperienceView;
