// Section Info component that dynamically renders section data into an unordered list
// Each list item has a Edit and Delete button to modify the entry in the section data
export default function SectionInfo({ onUpdate, onDelete, sectionData }) {
  return (
    <ul>
      {sectionData.map((sectionDataEntry) => {
        return (
          <li key={sectionDataEntry.id}>
            {/* Render the fields of the section if the field is not id */}
            {Object.entries(sectionDataEntry.savedFormData).map(
              ([field, value]) => {
                return (
                  field !== "id" && (
                    <p key={field} className={field}>
                      {value}
                    </p>
                  )
                );
              }
            )}
            <button onClick={() => onUpdate(sectionDataEntry.id)}>Edit</button>
            <button onClick={() => onDelete(sectionDataEntry.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
