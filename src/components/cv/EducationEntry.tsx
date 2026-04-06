import "./EducationEntry.css";

type EducationEntryProps = {
  institution: string;
  degree: string;
  dates: string;
  details?: string[];
};

export default function EducationEntry({
  institution,
  degree,
  dates,
  details = [],
}: EducationEntryProps) {
  return (
    <div className="education-entry">
      <div className="education-header">
        <h3 className="education-degree">{degree}</h3>
        <span className="education-institution">{institution}</span>
        <span className="education-dates">{dates}</span>
      </div>
      {details.length > 0 && (
        <ul className="education-details">
          {details.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
