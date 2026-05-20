import { Link } from "react-router-dom";

const Sidemenu = () => {
  return (
    <nav>
      <section>
        <h3>Main</h3>
        <ul>
          <li>
            <Link to="#">
              <img src="#" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="#">
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
