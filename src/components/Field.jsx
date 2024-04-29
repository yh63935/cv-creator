// Field component that renders a div with label and input based on label, type, value, handleChange props
export default function Field({ label, type, value, onChange }) {
  return (
    <div>
      <label htmlFor={label}></label>
      <input id={label} type={type} value={value} onChange={onChange}></input>
    </div>
  );
}
