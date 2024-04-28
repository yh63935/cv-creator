// Field component that renders a div with label and input nested inside
export default function Field({ label, value }) {
  return (
    <div>
      <label htmlFor={label}></label>
      <input id={label} type="text" value={value}></input>
    </div>
  );
}
