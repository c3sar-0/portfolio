import { Link } from "react-router-dom";
import transition from "../utils/transition";

const Home = () => {
  return (
    <>
      <main className="home">
        <div className="home__left-text">
          <p className="home__greeting">I am César, a</p>
          <p className="home__main-text">WEB DEVELOPER</p>
        </div>
        <div className="home__cta">
          <a className="cta-btn cta-btn--filled margin-right--small">
            CONTACT ME
          </a>
          <Link className="cta-btn" to="/my-work">
            MY WORK
          </Link>
        </div>
      </main>
    </>
  );
};

export default transition(Home);
