import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header__navigation">
          <div className="header__section-1">
            <Link to="/" className="header__link">
              Home
            </Link>
          </div>
          <div className="header__section-2">
            <Link to="/about-me" className="header__link">
              About Me
            </Link>
            <Link to="#" className="header__link">
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
