import "../Styles/InputField.css";
function InputField({ name, id, type, value, placeholder, title, onChange }) {
  return (
    <div className="input-field">
      <label className="label" htmlFor={id}>
        {title}
      </label>

      {type === "textarea" ? (
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          key={id}
        ></textarea>
      ) : (
        <input
          name={name}
          key={id}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
export default InputField;
