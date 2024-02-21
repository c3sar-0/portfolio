import transition from "../utils/transition";

const AboutMe = () => {
  return (
    <>
      <div className="about-me">
        <div className="about-me__desc">
          <h1 className="about-me__title">ABOUT ME</h1>
          <div className="about-me__text">
            I am an IT enthusiast with a solid background in web development,
            covering both frontend and backend technologies. I thrive in
            collaborative environments, absorbing knowledge from teammates and
            contributing my own. I am committed to being responsible, proactive,
            and ensuring effective communication within multidisciplinary teams.
          </div>
        </div>
        <div className="about-me__skills">
          <p className="about-me__subtitle">LANGUAGES</p>
          <div className="about-me__languages">
            <div className="about-me__language">Python</div>
            <div className="about-me__language">HTML</div>
            <div className="about-me__language">SQL</div>
            <div className="about-me__language">JavaScript</div>
            <div className="about-me__language">CSS</div>
            <div className="about-me__language">Bash</div>
          </div>
          <p className="about-me__subtitle">FRAMEWORKS AND LIBRARIES</p>
          <div className="about-me__skills">
            <div className="about-me__languages">
              <div className="about-me__language">Django</div>
              <div className="about-me__language">Node</div>
              <div className="about-me__language">Docker</div>
              <div className="about-me__language">Django REST Framework</div>
              <div className="about-me__language">Express</div>
              <div className="about-me__language">Kubernetes</div>
              <div className="about-me__language">Flask</div>
              <div className="about-me__language">React</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(AboutMe);
