import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="#" />
        <span>Dashboard</span>
      </div>
      <div className="navbar__content">
        <img src="/search.svg" className="navbar__icon" />
        <img src="/app.svg" className="navbar__icon" />
        <img src="/expand.svg" className="navbar__icon navbar__icon--size" />
        <div className="navbar__notification">
          <img src="/notification.svg" className="navbar__icon" />
          <span className="navbar__notification-badge">1</span>
        </div>
        <div className="navbar__avatar">
          <div className="navbar__avatar-frame">
            <img
              className="navbar__avatar-image"
              src="https://images.unsplash.com/photo-1586299485759-f62264d6b63f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <span>Jane</span>
        </div>
        <img src="/settings.svg" className="navbar__icon" />
      </div>
    </nav>
  );
};

export default Navbar;
