import {  NavLink } from "react-router-dom";
// import Classes from "./MainHeader.module.css";
import './MainHeader.css';

function MainHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/welcome">
              welcome
            </NavLink>
          </li>
          <li>
            <NavLink  activeClassName="active"  to="/products">
              products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
