import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import bg from "../assets/bg-laptop-cropped.jpg"


const Root = () => {
  return (
    <>
      <Header />
      <div className="bg">
        <img
          className="bg__img"
          src={bg}
          alt="bg image"
        />
      </div>
      <Outlet />
    </>
  );
};

export default Root;
