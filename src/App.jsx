import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import MyWork from "./pages/MyWork.jsx";
import AboutMe from "./pages/AboutMe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "my-work",
        element: <MyWork />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
    ],
  },
]);

function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
