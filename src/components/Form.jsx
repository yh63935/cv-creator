import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Field from "./Field";
export default function Form({ onCancel, onSave }) {
  const [sectionEntry, setSectionEntry] = useState({
    school: "",
    degree: "",
    startYear: "",
    endYear: "",
    gpa: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setSectionEntry({
      ...sectionEntry,
      [id]: value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    // Add a unique id to the education entry
    const sectionEntryWithId = { ...sectionEntry, id: uuidv4() };
    onSave(sectionEntryWithId);

    // Clear input values
    setSectionEntry({
      school: "",
      degree: "",
      startYear: "",
      endYear: "",
      gpa: "",
    });
  }
  const fieldConfigurations = [
    {
      type: "text",
      id: "school",
    },
    {
      type: "text",
      id: "degree",
    },
    {
      type: "date",
      id: "startYear",
    },
    {
      type: "date",
      id: "endYear",
    },
    { type: "number", id: "gpa" },
  ];

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Field
          type="text"
          id="school"
          onChange={handleChange}
          value={sectionEntry.school}
        />
        <Field
          type="text"
          id="degree"
          onChange={handleChange}
          value={sectionEntry.degree}
        />
        <Field
          type="date"
          id="startYear"
          onChange={handleChange}
          value={sectionEntry.startYear}
        />
        <Field
          type="date"
          id="endYear"
          onChange={handleChange}
          value={sectionEntry.endYear}
        />
        <Field
          type="number"
          id="gpa"
          onChange={handleChange}
          value={sectionEntry.gpa}
        />
        <button type="submit">Save</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}
