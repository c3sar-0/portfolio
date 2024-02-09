import transition from "../utils/transition";

const AboutMe = () => {
  return (
    <>
      <div className="about-me">
        <h1 className="about-me__title">ABOUT ME</h1>
        <div className="about-me__desc">
          I am an IT enthusiast with a solid background in web development,
          covering both frontend and backend technologies. I have expertise in
          various programming languages, frameworks, and tools, such as Django,
          React, Git, and Docker. I thrive in collaborative environments,
          absorbing knowledge from teammates and contributing my own. I am
          committed to being responsible, proactive, and ensuring effective
          communication within multidisciplinary teams.
        </div>
      </div>
    </>
  );
};

export default transition(AboutMe);
