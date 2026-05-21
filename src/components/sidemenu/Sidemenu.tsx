import { Link } from "react-router-dom";
import "./Sidemenu.scss";
import { menu } from "../../data/menu";

const Sidemenu = () => {
  return (
    <nav className="menu">
      {menu.map((list) => (
        <section className="menu__section" key={list.id}>
          <h3 className="menu__title">{list.title}</h3>
          <ul className="menu__list">
            {list.listItems.map((item) => (
              <li className="menu__item" key={item.id}>
                <Link to="{item.url}" className="menu__link">
                  <img src={item.icon} />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
};

export default Sidemenu;
