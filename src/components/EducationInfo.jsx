export default function EducationInfo({ onDelete, educationData }) {
  return (
    <ul>
      {educationData.map((education) => {
        return (
          <li key={education.id}>
            <h2>Education</h2>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <p>{education.startYear}</p>
            <p>{education.endYear}</p>
            <p>{education.gpa} </p>
            <button onClick={() => onDelete(education.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
