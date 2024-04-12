export default function EducationInfo({
  school,
  degree,
  startYear,
  endYear,
  GPA,
}) {
  return (
    <div>
      <h2>Education</h2>
      <h3>{school}</h3>
      <p>{degree}</p>
      <p>{startYear}</p>
      <p>{endYear}</p>
      <p>{GPA}</p>
    </div>
  );
}
