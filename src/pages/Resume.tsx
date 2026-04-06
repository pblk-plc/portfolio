import ContactInfo from "../components/cv/ContactInfo";
import Divider from "../components/foundation/Divider";
import Badge from "../components/foundation/Badge";
import Timeline from "../components/cv/Timeline";
import ExperienceEntry from "../components/cv/ExperienceEntry";
import EducationEntry from "../components/cv/EducationEntry";
import SkillBar from "../components/cv/SkillBar";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const contact = [
  { label: "Location", value: "Brisbane, QLD" },
  {
    label: "Email",
    value: "Email",
    href: "mailto:Email",
  },
  { label: "Phone", value: "Per Request" },
  { label: "GitHub", value: "GitHub", href: "https://github.com/" },
];

const skills = [
  "C#",
  "SQL",
  "Git",
  "Unit Testing",
  "Attention to Detail",
  "Time Management",
  "Team Collaboration",
  "Order Processing",
];

const learning = [
  { skill: "Cloud Computing", level: 30 },
  { skill: "Machine Learning", level: 20 },
  { skill: "Security Best Practices", level: 45 },
  { skill: "React", level: 40 },
];

export default function Resume() {
  useDocumentTitle("Resume");
  return (
    <div>
      <h2>Name</h2>
      <p>
        Praesent iaculis nunc et lobortis porta. Duis molestie fringilla magna, non scelerisque
        nulla consectetur eget. Suspendisse vestibulum interdum augue, ut fringilla nunc placerat
        eu. In malesuada ligula hendrerit ligula molestie, sit amet interdum turpis molestie.
        Quisque ut pulvinar ligula. Integer sollicitudin nibh sem, vitae feugiat dolor varius vitae.
        Nulla ultrices augue at nunc imperdiet volutpat. Sed maximus libero convallis vehicula
        convallis. Fusce eu ultricies velit.
      </p>

      <ContactInfo items={contact} />

      <Divider label="Experience" />

      <Timeline>
        <ExperienceEntry
          company="Discount Supplies"
          role="Warehouse Employee"
          startDate="Jan 2022"
          endDate="Feb 2024"
          description={[
            "Processed orders efficiently and accurately, ensuring timely shipment and delivery.",
            "Utilised time management skills to prioritise tasks effectively in a fast-paced environment.",
            "Experience with teamwork in both university and work settings.",
            "Order management systems for efficient order fulfilment.",
            "Assisted customers with inquiries and provided support.",
          ]}
          technologies={["Inventory Management", "Order Processing", "Team Collaboration"]}
        />
      </Timeline>

      <Divider label="Education" />

      <Timeline>
        <EducationEntry
          institution="Queensland University of Technology"
          degree="Bachelor of Information Technology: Computer and Information Sciences"
          dates="Jan 2022 -- Nov 2024"
          details={["GPA 6.0", "Minor in User Experience Design", "Minor in Management"]}
        />
        <EducationEntry
          institution="Indooroopilly State High"
          degree="High School Diploma"
          dates="IDK -- Dec 2021"
        />
      </Timeline>

      <Divider label="Skills" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {skills.map((s) => (
          <Badge key={s} variant="outline">
            {s}
          </Badge>
        ))}
      </div>

      <Divider label="Currently Learning" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {learning.map((l) => (
          <SkillBar key={l.skill} skill={l.skill} level={l.level} />
        ))}
      </div>
    </div>
  );
}
