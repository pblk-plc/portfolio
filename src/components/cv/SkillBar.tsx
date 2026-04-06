import "./SkillBar.css";

type SkillBarProps = {
  skill: string;
  level: number;
  color?: string;
};

export default function SkillBar({ skill, level, color = "#000" }: SkillBarProps) {
  const clamped = Math.max(0, Math.min(100, level));

  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{skill}</span>
        <span className="skill-bar-level">{clamped}%</span>
      </div>
      <div
        className="skill-bar-track"
        role="meter"
        aria-label={skill}
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="skill-bar-fill" style={{ width: `${clamped}%`, background: color }} />
      </div>
    </div>
  );
}
