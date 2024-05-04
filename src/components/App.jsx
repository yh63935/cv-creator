import PersonalInfo from "./personal-info/PersonalInfo";
import Form from "./Form";
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

  const fieldConfigurations = [
    {
      id: "school",
      type: "text",
    },
    {
      id: "degree",
      type: "text",
    },
    {
      id: "startYear",
      type: "date",
    },
    {
      id: "endYear",
      type: "date",
    },
    { id: "gpa", type: "number" },
  ];

  return (
    <>
      <PersonalInfo />
      <button onClick={handleAdd}>Add Education</button>
      {(isEditing && (
        <Form
          onCancel={handleCancel}
          onSave={handleSave}
          fieldConfigurations={fieldConfigurations}
        />
      )) || (
        <EducationInfo
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          educationData={savedData}
        />
      )}
    </>
  );
}

export default App;
