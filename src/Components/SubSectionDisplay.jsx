import React from "react";
function SubSectionDisplay({ subSectionArray, InfoComponent, title }) {
  return (
    <React.Fragment>
      {!subSectionArray.every((obj) => obj.visible) && (
        <h3 className="header-text">{title}</h3>
      )}

      {subSectionArray.map(
        (info) => !info.visible && <InfoComponent info={info} key={info.id} />
      )}
    </React.Fragment>
  );
}

export default SubSectionDisplay;
