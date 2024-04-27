import PersonalInfo from "./personal-info/PersonalInfo";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";
import { useState } from "react";
function App() {
  const [savedData, setSavedData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editMode, setEditMode] = useState("add"); //'add' or 'update'
    setSavedData(
      savedData.map((record) => {
        if (record.id === id) {
          return formData;
        }
        return record;
      })
    );
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
