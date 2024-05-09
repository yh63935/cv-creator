import PersonalInfo from "./personal-info/PersonalInfo";
import Form from "./Form";
import SectionInfo from "./SectionInfo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [savedData, setSavedData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editMode, setEditMode] = useState("add"); //'add' or 'update'
  const [editId, setEditId] = useState(null);

  // savedData can have [{type: , savedData}, {type: , savedData}]
  // savedData right now is [sectionEntry, sectionEntry, sectionEntry]
  // [{type:education, savedFormData:[sectionEntry, sectionEntry]}

  function handleSave(type, formData) {
    // If edit mode is add, add new formData as an entry to savedData
    if (editMode === "add") {
      console.log("type", type, "formData", formData);

      setSavedData(
        [...savedData, { type: type, savedFormData: [formData] }]
        // savedData.map((record) => {
        //   console.log("record", record);
        //   if (record.type === type) {
        //     console.log("recordtype", record.type);

        //     return {
        //       ...record,
        //       savedFormData: record.savedFormData.push(formData),
        //     };
        //   } else {
        //     return record;
        //   }
        // })
      );
      console.log("savedData", savedData);
      // setSavedData([...savedData, { savedFormData: formData }]);
    } else {
      // If edit mode is update, update data when saving
      // If savedData has the same ID as the one being edited, update the entry with the new form data
      // Otherwise, return the original entry
      setSavedData(
        savedData.map((record) => {
          return record.savedFormData.map((savedFormDataRecord) => {
            if (savedFormDataRecord.id === editId) {
              return formData;
            }
            return savedFormDataRecord;
          });
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

  const educationFieldConfigurations = [
    {
      id: "school",
      type: "text",
      label: "School",
    },
    {
      id: "degree",
      type: "text",
      label: "Degree",
    },
    {
      id: "educationLocation",
      type: "text",
      label: "Location",
    },
    {
      id: "startYear",
      type: "date",
      label: "Start Year",
    },
    {
      id: "endYear",
      type: "date",
      label: "End Year",
    },
    { id: "gpa", type: "number", label: "GPA" },
  ];

  const professionalFieldConfigurations = [
    {
      id: "company",
      type: "text",
      label: "Company",
    },
    {
      id: "jobTitle",
      type: "text",
      label: "Job Title",
    },
    {
      id: "jobDescription",
      type: "text",
      label: "Description",
    },
    {
      id: "startYear",
      type: "text",
      label: "Start Year",
    },
    {
      id: "endYear",
      type: "text",
      label: "End Year",
    },
    {
      id: "jobLocation",
      type: "text",
      label: "Location",
    },
  ];

  const fieldConfigurationsArray = [
    { type: "education", configurations: educationFieldConfigurations },
    {
      type: "professional",
      configurations: professionalFieldConfigurations,
    },
  ];

  return (
    <>
      <PersonalInfo />
      <button onClick={handleAdd}>Add Education</button>
      <div>
        {fieldConfigurationsArray.map((fieldConfiguration) => {
          return isEditing ? (
            <Form
              key={uuidv4()} // Don't forget to add a unique key
              onCancel={handleCancel}
              onSave={handleSave}
              type={fieldConfiguration.type}
              fieldConfigurations={fieldConfiguration.configurations}
            />
          ) : (
            <p></p>
          );
          // (
          //   <SectionInfo
          //     key={uuidv4()} // Don't forget to add a unique key
          //     onUpdate={handleUpdate}
          //     onDelete={handleDelete}
          //     sectionData={savedData}
          //   />
          // );
        })}
      </div>
    </>
  );
}

export default App;

// savedData array with type
// when you press button with type, add it to the savedData with that type property
