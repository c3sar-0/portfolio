import bb1 from "../assets/bb1.png"
import bb2 from "../assets/bb2.png"

const MyWork = () => {
  return (
    <>
      <div className="my-work__main">
        <section className="my-work__section my-work__bytebusters">
          <div className="my-work__info">
            <h1 className="my-work__title">BYTE BUSTERS</h1>
            <p className="my-work__desc">
              Bytebusters is a website where users can register, join, share and interact with posts. Here everyone can let their creativity free and enjoy while sharing experiences with the community. Create, like and comment posts, interact with other users, make friends, and much more!
            </p>
          </div>
          <div className="my-work__images">
            <img className="my-work__desktop-img" alt="demo desktop image" src={bb1} />
            <img className="my-work__mobile-img" alt="demo mobile image" src={bb2} />
          </div>
        </section>
      </div>
    </>
  );
};

export default MyWork;
