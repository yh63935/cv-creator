import PersonalInfo from "./personal-info/PersonalInfo";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";
import { useState } from "react";
function App() {
  const [savedData, setSavedData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editMode, setEditMode] = useState("add"); //'add' or 'update'
  const [editId, setEditId] = useState(null);

  function handleSave(formData) {
    // If edit mode is add, add new formData as an entry to savedData
    if (editMode === "add") {
      setSavedData([...savedData, formData]);
    } else {
      // If edit mode is update, update data when saving
      // If savedData has the same ID as the one being edited, update the entry with the new form data
      // Otherwise, return the original entry
    setSavedData(
      savedData.map((record) => {
          if (record.id === editId) {
          return formData;
        }
        return record;
      })
    );
    }
    setIsEditing(false);
  }

  function handleAdd() {
    setIsEditing(true);
    setEditMode("add");
  }

  function handleUpdate(id) {
    setIsEditing(true);
    setEditMode("update");
    setEditId(id);
  }

  function handleDelete(id) {
    setSavedData(savedData.filter((record) => record.id !== id));
  }

  function handleCancel(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <>
      <PersonalInfo />
      <button onClick={handleAdd}>Add Education</button>
      {isEditing && (
    </>
  );
}

export default App;
