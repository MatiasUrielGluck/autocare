import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/home.page.jsx";
import { ProblemsCategoryPage } from "../pages/home/problems.page.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/problemas",
    element: <ProblemsCategoryPage />,
  },
]);
