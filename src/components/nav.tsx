import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="vtn-nav">
      <ul className="nav-row top">
        <li>
          <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/blog">
            Thoughts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/photography"
          >
            Photography
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/about">
            About
          </NavLink>
        </li>
      </ul>
      <span className="label">CONTACT</span>
      <ul className="nav-row mid">
        <li>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/resume"
          >
            Resume
          </NavLink>
        </li>
        <li>
          <a className="nav-link" href="mailto:email">
            Email
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub<span className="sr-only"> (opens in new tab)</span>
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn<span className="sr-only"> (opens in new tab)</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
