import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Field from "./Field";
export default function Form({ onCancel, onSave, type, fieldConfigurations }) {
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
    onSave(type, sectionEntryWithId);

    // Clear input values
    setSectionEntry({
      school: "",
      degree: "",
      startYear: "",
      endYear: "",
      gpa: "",
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {fieldConfigurations.map((fieldConfiguration) => {
          return (
            <Field
              key={fieldConfiguration.id}
              id={fieldConfiguration.id}
              type={fieldConfiguration.type}
              label={fieldConfiguration.label}
              onChange={handleChange}
              value={sectionEntry[fieldConfiguration.id]}
            />
          );
        })}

        <button type="submit">Save</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}
