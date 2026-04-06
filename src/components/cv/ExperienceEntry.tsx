import Badge from "../foundation/Badge";
import "./ExperienceEntry.css";

type ExperienceEntryProps = {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies?: string[];
};

export default function ExperienceEntry({
  company,
  role,
  startDate,
  endDate = "Present",
  description,
  technologies = [],
}: ExperienceEntryProps) {
  return (
    <div className="experience-entry">
      <div className="experience-header">
        <h3 className="experience-role">{role}</h3>
        <span className="experience-company">{company}</span>
        <span className="experience-dates">
          {startDate} -- {endDate}
        </span>
      </div>
      {description.length > 0 && (
        <ul className="experience-list">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {technologies.length > 0 && (
        <div className="experience-tech">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
