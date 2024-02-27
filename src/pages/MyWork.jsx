import bb1 from "../assets/bb1.png";
import bb2 from "../assets/bb2.png";
import ghLogo from "../assets/gh-logo.svg";
import webIcon from "../assets/web-icon.svg";
import transition from "../utils/transition";

const MyWork = () => {
  return (
    <>
      <div className="my-work">
        <section className="my-work__section my-work__bytebusters">
          <div className="my-work__info">
            <h1 className="my-work__title">
              <p>BYTE</p>
              <p>BUSTERS</p>
            </h1>
            <p className="my-work__desc">
              Bytebusters is a website where users can register, create, share
              and interact with posts. Here everyone can let their creativity
              free and enjoy while sharing experiences with the community.
              Create, like and comment posts, interact with other users, make
              friends, and much more!
            </p>
            <div className="my-work__link-icons">
              <img src={ghLogo} alt="gh logo" className="my-work__link-icon" />
              <img
                src={webIcon}
                alt="web icon"
                className="my-work__link-icon"
              />
            </div>
          </div>
          <div className="my-work__images">
            <div className="my-work__desktop-img">
              <img alt="demo desktop image" src={bb1} />
            </div>
            <div className="my-work__mobile-img">
              <img alt="demo mobile image" src={bb2} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default transition(MyWork);
