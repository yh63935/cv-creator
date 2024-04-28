// Field component that renders a div with label and input based on label, value props
export default function Field({ label, type, value, handleChange }) {
  return (
    <div>
      <label htmlFor={label}></label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}
