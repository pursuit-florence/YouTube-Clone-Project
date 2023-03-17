import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
    return(
      <header>
      <article>
        <h1>
          <Link to="/"> 
            Youtube
          </Link> 
        </h1>
      </article>
      <nav>
        <ul>
          <li className="nav-links">
            <Link to="/">
            Home
             </Link>
          </li>
          <li className="nav-links">
            <Link to="/about">
            About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
