import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

const RouterDetails = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, element: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default RouterDetails;
