import "./ContactInfo.css";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

type ContactInfoProps = {
  items: ContactItem[];
};

export default function ContactInfo({ items }: ContactInfoProps) {
  return (
    <div className="contact-info">
      {items.map(({ label, value, href }) => (
        <div key={label} className="contact-info-item">
          <span className="contact-info-label">{label}</span>
          {href ? (
            <a
              href={href}
              className="contact-info-value"
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {value}
              {href.startsWith("http") && <span className="sr-only"> (opens in new tab)</span>}
            </a>
          ) : (
            <span className="contact-info-value">{value}</span>
          )}
        </div>
      ))}
    </div>
  );
}
