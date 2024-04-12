export default function EducationInfo({ educationData }) {
  return (
    <div>
      <h2>Education</h2>
      <h3>{educationData.school}</h3>
      <p>{educationData.degree}</p>
      <p>{educationData.startYear}</p>
      <p>{educationData.endYear}</p>
      <p>{educationData.gpa}</p>
    </div>
  );
}
