import Home from "../pages/Home";
import View from "../pages/View";

export const ROUTES = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/view/:id",
    element: View,
  },
];
