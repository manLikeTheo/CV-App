import FormCollapse from "./FormCollapse";

function DisplayForms({
  forms,
  onChange,
  onCancel,
  toggleCollapse,
  onHide,
  onRemove,
  FormComponent,
  titleKey,
  subSectionName,
}) {
  return (
    <div className="forms-container">
      {forms.map((form) =>
        form.isCollapsed ? (
          <FormCollapse
            onClick={toggleCollapse}
            key={form.id}
            form={form}
            title={form[titleKey]}
            subSectionName={subSectionName}
            hideForm={onHide}
          />
        ) : (
          <FormComponent
            onChange={onChange}
            form={form}
            key={form.id}
            cancel={onCancel}
            remove={onRemove}
            save={toggleCollapse}
          />
        )
      )}
    </div>
  );
}

export default DisplayForms;
