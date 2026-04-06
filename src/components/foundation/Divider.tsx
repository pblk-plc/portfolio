import "./Divider.css";

type DividerProps = {
  label?: string;
  vertical?: boolean;
  className?: string;
};

export default function Divider({ label, vertical = false, className = "" }: DividerProps) {
  const cls = `divider${vertical ? " divider-vertical" : ""}${className ? ` ${className}` : ""}`;

  if (label) {
    return (
      <div className={cls}>
        <span className="divider-line" />
        <span className="divider-label">{label}</span>
        <span className="divider-line" />
      </div>
    );
  }

  return vertical ? <span className={cls} /> : <hr className={cls} />;
}
