import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import { Navpath } from "./NavPath";


 export const router = createBrowserRouter([
  {
    path:Navpath.Home,
    Component: Home,
  },
]);