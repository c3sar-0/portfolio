import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="bg">
        <img
          className="bg__img"
          src="/images/bg-laptop-cropped.jpg"
          alt="bg image"
        />
      </div>

      <Header />

      <main className="main">
        <div className="main__left-text">
          <p className="main__greeting">I am César, a</p>
          <p className="main__main-text">WEB DEVELOPER</p>
        </div>
        <div className="main__cta">
          <a className="cta-btn cta-btn--filled margin-right--small">
            CONTACT ME
          </a>
          <a className="cta-btn">MY WORK</a>
        </div>
      </main>
    </>
  );
};

export default Home;
