import PersonalInfo from "./personal-info/PersonalInfo";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";
import { useState } from "react";
function App() {
  const [savedData, setSavedData] = useState([]);

  function handleSave(formData) {
    setSavedData([...savedData, formData]);
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
