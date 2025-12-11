import Home from "../pages/Home";
import Detail from "../pages/Detail";

export const ROUTES = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/view/:id",
    element: Detail,
  },
];
