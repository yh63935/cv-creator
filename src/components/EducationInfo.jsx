export default function EducationInfo({ onUpdate, onDelete, educationData }) {
  return (
    <ul>
      {educationData.map((education) => {
        return (
          <li key={education.id}>
            <h2>Education</h2>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <p>{education.startYear}</p>
            <p>{education.endYear}</p>
            <p>{education.gpa} </p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={() => onDelete(education.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
// when edit button is clicked
// then isEditing becomes true
// need to add functionality to onSave since that is the button you will clikck
// If no id, add new entry
// if yes, go throguh the array of saved education data and find the one with the id you clicked
// map everything with everything the same but the id one changed?
// array.map(education => { if education.id === id then put form edits else return item})
