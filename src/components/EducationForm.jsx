import { useState } from "react";
export default function EducationForm({ onSave }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    startYear: "",
    endYear: "",
    gpa: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setEducationData({
      ...educationData,
      [id]: value,
    });
  }

  function onEdit() {
    setIsEditing(true);
  }

  function onCancel() {
    setIsEditing(false);
  }

  function onDelete() {
    setIsEditing(false);
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <button onClick={onEdit}>Edit information</button>
      <form onSubmit={onSubmit} className={isEditing ? "edit-mode" : ""}>
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
        <button onClick={() => onSave(educationData)}>Save</button>
        <button onClick={onDelete}>Delete</button>
      </form>
    </div>
  );
}
