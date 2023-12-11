import React from "react";
import "../Styles/SubSection-view.css";
function SubSectionView({ array, DataComponent, title }) {
  return (
    <>
      {/* {array.every(data => (data.isNotVisible && <h2 className="subsection-header">{title}</h2>))} */}
      <h2 className="subsection-title">{title}</h2>
      {array.map((obj) => (
        <DataComponent {...obj} key={obj.id} />
      ))}
    </>
  );
}

// const SubSectionView = ({ array, DataComponent, title }) => {
//   <>
//     <h2>{title}</h2>
//     {array.map((data) => {
//       <DataComponent data={data} key={data.id} />;
//     })}
//   </>;
// };
export default SubSectionView;
