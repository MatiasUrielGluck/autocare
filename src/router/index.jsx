import {createBrowserRouter} from "react-router-dom";
import { HomePage } from "../pages/home/home.page.jsx";

export default createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
]);