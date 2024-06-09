import { createBrowserRouter } from "react-router-dom";
import { EmegencyPage } from "../pages/home/emergency.page.jsx";
import { HomePage } from "../pages/home/home.page.jsx";
import { ProblemsCategoryPage } from "../pages/home/problems.page.jsx";
import { SearchResultPage } from "../pages/home/searchresult.page.jsx";
import { CategoriaItemPage } from "../pages/categoria_item/categoria_item.page.jsx";
import { NotificationsPage } from "../pages/home/notifications.page.jsx";
import { HistorialPage } from "../pages/historial/historial.page.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/problemas",
    element: <ProblemsCategoryPage />,
  },
  {
    path: "/problemas/:id",
    element: <CategoriaItemPage />,
  },
  {
    path: "/emergencia",
    element: <EmegencyPage />,
  },
  {
    path: "/result",
    element: <SearchResultPage />,
  },
  {
    path: "/notifications",
    element: <NotificationsPage />,
  },
  {
    path: "/history",
    element: <HistorialPage />,
  },
]);
