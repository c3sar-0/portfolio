import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <div className="bg">
        <img
          className="bg__img"
          src="/images/bg-laptop-cropped.jpg"
          alt="bg image"
        />
      </div>
      <Outlet />
    </>
  );
};

export default Root;
