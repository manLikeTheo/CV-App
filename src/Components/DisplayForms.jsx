import CollapsedMode from "./CollapsedMode";
import "../Styles/Display-forms.css";
function DisplayForms({
  forms,
  onChange,
  onCancel,
  toggleCollapse,
  onHide,
  onRemove,
  FormComponent,
  title,
  arrayName,
}) {
  return (
    <div className="forms-container">
      {forms.map((form) =>
        form.isCollapsed ? (
          <CollapsedMode
            onClick={toggleCollapse}
            key={form.id}
            form={form}
            title={form[title]}
            arrayName={arrayName}
            hideForm={onHide}
          />
        ) : (
          <FormComponent
            onChange={onChange}
            form={form}
            key={form.id}
            cancel={onCancel}
            add={toggleCollapse}
            remove={onRemove}
          />
        )
      )}
    </div>
  );
}

export default DisplayForms;
