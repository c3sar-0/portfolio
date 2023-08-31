import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MyWork from "./pages/MyWork.jsx";
import Root from "./pages/Root.jsx";
import { AnimatePresence } from "framer-motion";

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
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
