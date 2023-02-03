import "./InputField.scss";

const InputField = ({ name, type = "text" }) => {
  return (
    <div className="inputField">
      <label htmlFor={name} className="label">
        {name}
      </label>
      {type === "textarea" ? (
        <textarea id={name} name={name} className="input textarea"></textarea>
      ) : (
        <input id={name} name={name} type={type} className="input" />
      )}
    </div>
  );
};

export default InputField;
