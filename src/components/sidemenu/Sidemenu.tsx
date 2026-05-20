import { Link } from "react-router-dom";
import "./Sidemenu.scss";

const Sidemenu = () => {
  return (
    <nav className="menu">
      <section className="menu__section">
        <h3 className="menu__title">Main</h3>
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="#" className="menu__link">
              <img src="#" />
              <span>Home</span>
            </Link>
          </li>
          <li className="menu__item">
            <Link to="#" className="menu__link">
              <img src="#" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Sidemenu;
