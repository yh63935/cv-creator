import PersonalInfo from "./personal-info/PersonalInfo";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";
import { useState } from "react";
function App() {
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

  return (
    <>
      <PersonalInfo />
      <EducationForm
        educationData={educationData}
        handleChange={handleChange}
      />
      <EducationInfo educationData={educationData} />
    </>
  );
}

export default App;
