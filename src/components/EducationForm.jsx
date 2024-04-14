import { useState } from "react";
export default function EducationForm({ educationData, handleChange }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  function onEdit() {
    setIsEditing(true);
  }

  function onSave() {
    setIsEditing(false);
  }

  function onCancel() {
    setIsEditing(false);
  }

  function onDelete() {
    setIsEditing(false);
  }

  return (
    <div>
      <p hidden={isEditing}>This will show if not editing </p>
      <button onClick={onEdit}>Edit information</button>
      <form>
        <input
          type="text"
          id="school"
          onChange={handleChange}
          value={educationData.school}
        ></input>
        <input
          type="text"
          id="degree"
          onChange={handleChange}
          value={educationData.degree}
        ></input>
        <input
          type="date"
          id="startYear"
          onChange={handleChange}
          value={educationData.startYear}
        ></input>
        <input
          type="date"
          id="endYear"
          onChange={handleChange}
          value={educationData.endYear}
        ></input>
        <input
          type="number"
          id="gpa"
          onChange={handleChange}
          value={educationData.gpa}
        ></input>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onSave}>Save</button>
        <button onClick={onDelete}>Delete</button>
      </form>
    </div>
  );
}
