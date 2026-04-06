import { Link } from "react-router-dom";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page Not Found");
  return (
    <div style={{ textAlign: "center", padding: "var(--space-xl) 0" }}>
      <h2>404</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: "inherit" }}>
        Go home
      </Link>
    </div>
  );
}
