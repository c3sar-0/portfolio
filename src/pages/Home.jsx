import { Link, useOutletContext } from "react-router-dom";
import transition from "../utils/transition";

const Home = () => {
  const [openModal] = useOutletContext();

  return (
    <>
      <main className="home">
        <header className="home__header">
          <div className="home__left-text">
            <p className="home__greeting">I am César, a</p>
            <p className="home__main-text">
              WEB
              <br />
              DEVELOPER
            </p>
          </div>
          <div className="home__cta">
            <Link
              className="cta-btn cta-btn--filled"
              to="#"
              onClick={openModal}
            >
              CONTACT ME
            </Link>
            <Link className="cta-btn" to="/my-work">
              MY WORK
            </Link>
          </div>
        </header>
      </main>
    </>
  );
};

export default transition(Home);
