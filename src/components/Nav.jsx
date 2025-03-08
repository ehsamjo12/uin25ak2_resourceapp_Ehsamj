// Nav.jsx
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/html">HTML</NavLink></li>
          <li><NavLink to="/css">CSS</NavLink></li>
          <li><NavLink to="/javascript">JavaScript</NavLink></li>
          <li><NavLink to="/react">React</NavLink></li>
          <li><NavLink to="/sanity">Sanity og Headless CMS</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
