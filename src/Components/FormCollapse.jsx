function FormCollapse(props) {
  const { onClick, title, subSectionName } = props;
  const { isVisible, id } = props.form;

  return (
    <button
      className="form-collapse subsection-form"
      id={id}
      onClick={onClick}
      data-array-name={subSectionName}
    >
      <p className="form-collapse-title">{title}</p>
      <i
        className={`fa-regular ${isVisible ? "fa-eye-slash" : "fa-eye"}`}
        onClick={(e) => {
          e.stopPropagation();
          hideForm(e);
        }}
      ></i>
    </button>
  );
}

export default FormCollapse;
