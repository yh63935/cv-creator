import { v4 as uuidv4 } from "uuid";
export default function EducationInfo({ educationData }) {
  return (
    <ul>
      {educationData.map((education) => {
        return (
          <li key={uuidv4()}>
            <h2>Education</h2>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <p>{education.startYear}</p>
            <p>{education.endYear}</p>
            <p>{education.gpa}</p>
          </li>
        );
      })}
    </ul>
  );
}
