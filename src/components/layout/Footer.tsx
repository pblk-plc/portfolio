import "./Footer.css";
import { SITE } from "../../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <span className="footer-copy">
          &copy; {year} {SITE.brand}
        </span>
      </div>
    </footer>
  );
}
