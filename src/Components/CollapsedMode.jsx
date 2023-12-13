import "../Styles/Collapsed-mode.css";

function CollapsedMode(props) {
  const { onClick, hideForm, title, arrayName } = props;
  const { isNotVisible, id } = props.form;

  return (
    <button
      className="collapsed-form-mode subsection-form"
      id={id}
      data-array-name={arrayName}
      onClick={onClick}
    >
      <p className="title-collapsed">{title}</p>
      <i
        className={`fa-regular ${isNotVisible ? "fa-eye-slash" : "fa-eye"} eye`}
        onClick={(e) => {
          e.stopPropagation();
          hideForm(e);
        }}
      ></i>
    </button>
  );
}
export default CollapsedMode;
