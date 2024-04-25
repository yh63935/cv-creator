import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function EducationForm({ onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [educationEntry, setEducationEntry] = useState({
    school: "",
    degree: "",
    startYear: "",
    endYear: "",
    gpa: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setEducationEntry({
      ...educationEntry,
      [id]: value,
    });
  }

  function onEdit() {
    setIsEditing(true);
  }

  function onCancel(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function onSubmit(e) {
    e.preventDefault();
    const educationEntryWithId = { ...educationEntry, id: uuidv4() };
    onSave(educationEntryWithId);
  }

  return (
    <div>
      <button onClick={onEdit}>Add Education</button>
      <form onSubmit={onSubmit} className={isEditing ? "edit-mode" : ""}>
        <input
          type="text"
          id="school"
          onChange={handleChange}
          value={educationEntry.school}
        ></input>
        <input
          type="text"
          id="degree"
          onChange={handleChange}
          value={educationEntry.degree}
        ></input>
        <input
          type="date"
          id="startYear"
          onChange={handleChange}
          value={educationEntry.startYear}
        ></input>
        <input
          type="date"
          id="endYear"
          onChange={handleChange}
          value={educationEntry.endYear}
        ></input>
        <input
          type="number"
          id="gpa"
          onChange={handleChange}
          value={educationEntry.gpa}
        ></input>
        <button type="submit">Save</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}
