import PersonalInfo from "./personal-info/PersonalInfo";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";
import { useState } from "react";
function App() {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");

  const [startYear, setStartYear] = useState("");

  const [endYear, setEndYear] = useState("");

  const [GPA, setGPA] = useState("");

  function handleChange(e) {
    const { id, value } = e.target;

    switch (id) {
      case "school":
        setSchool(value);
        break;
      case "degree":
        setDegree(value);
        break;
      case "start-year":
        setStartYear(value);
        break;
      case "end-year":
        setEndYear(value);
        break;
      case "gpa":
        setGPA(value);
        break;
    }
  }

  return (
    <>
      <PersonalInfo />
      <EducationForm
        school={school}
        degree={degree}
        startYear={startYear}
        endYear={endYear}
        GPA={GPA}
        handleChange={handleChange}
      />
      <EducationInfo
        school={school}
        degree={degree}
        startYear={startYear}
        endYear={endYear}
        GPA={GPA}
      />
    </>
  );
}

export default App;
