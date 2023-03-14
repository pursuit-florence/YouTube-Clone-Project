import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
    return(
      <header>
      <article>
        <h1>
          {/* <Link to="/"> */}
          Youtube
          {/* </Link> */}
        </h1>
      </article>
      <nav>
        <ul>
          <li>
            {/* <Link to="/home">  */}
            Home
             {/* </Link>  */}
          </li>
          <li>
            <Link to="/about">
            About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
