// Field component that renders a div with label and input based on id, label, type, value, handleChange props
export default function Field({ id, label, type, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange}></input>
    </div>
  );
}
