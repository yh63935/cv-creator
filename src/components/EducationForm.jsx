import { useState } from "react";
export default function Education() {
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
    <div>
      <input
        type="text"
        id="school"
        onChange={handleChange}
        value={school}
      ></input>
      <input
        type="text"
        id="degree"
        onChange={handleChange}
        value={degree}
      ></input>
      <input
        type="date"
        id="start-year"
        onChange={handleChange}
        value={startYear}
      ></input>
      <input
        type="date"
        id="end-year"
        onChange={handleChange}
        value={endYear}
      ></input>
      <input
        type="number"
        id="gpa"
        step="0.01"
        onChange={handleChange}
        value={GPA}
      ></input>
    </div>
  );
}
