import "../Styles/Expand-Mode.css";
function ExpandMode({ isOpen, setOpen, subSectionName, icon }) {
  return (
    <button className="expand-mode-btn" onClick={setOpen}>
      <i className={icon}></i>
      <p className="subSection-name">{subSectionName}</p>
      <i className={`fa fa-chevron ${isOpen ? "-up" : ""}`}>^</i>
    </button>
  );
}
export default ExpandMode;
