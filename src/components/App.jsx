import PersonalInfo from "./personal-info/PersonalInfo";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";
import { useState } from "react";
function App() {
  const [savedData, setSavedData] = useState([]);

  function handleSave(id, formData) {
    // if savedData has the id, then update the data of that id
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

  return (
    <>
      <PersonalInfo />
      <EducationForm onSave={handleSave} />
      <EducationInfo onDelete={handleDelete} educationData={savedData} />
    </>
  );
}

export default App;
