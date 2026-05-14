import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidemenu from "../components/sidemenu/Sidemenu";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>

      <div>
        <nav>
          <Sidemenu />
        </nav>
        <main>
          <Outlet />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
