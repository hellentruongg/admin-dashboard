import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidemenu from "../components/sidemenu/Sidemenu";
import Footer from "../components/footer/Footer";
import "../styles/global.scss";

const RootLayout = () => {
  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>

      <div className="container">
        <aside className="sidebar">
          <Sidemenu />
        </aside>
        <main className="content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
