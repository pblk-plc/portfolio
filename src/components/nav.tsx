import "./nav.css";

export default function Nav() {
  return (
    <nav className="vtn-nav">
      {/* Top category */}
      <ul className="nav-row top">
        <li>
          <a className="nav-link" href="">
            Home 0 1 2
          </a>
        </li>
        <li>
          <a className="nav-link active" href="">
            Thoughts
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Photography
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            About
          </a>
        </li>
      </ul>
      {/* CONTACT */}
      <h2 className="label">CONTACT</h2>
      <ul className="nav-row mid">
        <li>
          <a className="nav-link" href="">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Thoughts
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Photography
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
