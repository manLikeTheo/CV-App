import EducationDataView from "./EducationDataView";
import SubSectionView from "../SubSectionView";
function EducationSubSectionView({ educationArray }) {
  return (
    <>
      <SubSectionView
        array={educationArray}
        DataComponent={EducationDataView}
        title="Education"
      />
    </>
  );
}

export default EducationSubSectionView;
