import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function EducationForm({ onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [educationFormData, setEducationFormData] = useState({
    school: "",
    degree: "",
    startYear: "",
    endYear: "",
    gpa: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setEducationFormData({
      ...educationFormData,
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
    const educationFormDataWithId = { ...educationFormData, id: uuidv4() };
    onSave(educationFormDataWithId);
  }

  return (
    <div>
      <button onClick={onEdit}>Add Education</button>
      <form onSubmit={onSubmit} className={isEditing ? "edit-mode" : ""}>
        <input
          type="text"
          id="school"
          onChange={handleChange}
          value={educationFormData.school}
        ></input>
        <input
          type="text"
          id="degree"
          onChange={handleChange}
          value={educationFormData.degree}
        ></input>
        <input
          type="date"
          id="startYear"
          onChange={handleChange}
          value={educationFormData.startYear}
        ></input>
        <input
          type="date"
          id="endYear"
          onChange={handleChange}
          value={educationFormData.endYear}
        ></input>
        <input
          type="number"
          id="gpa"
          onChange={handleChange}
          value={educationFormData.gpa}
        ></input>
        <button type="submit">Save</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}
