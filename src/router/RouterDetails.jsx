import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

const RouterDetails = ({ todos, onEdit, onCreate, onDelete, onUpdate }) => {
  return (
    <Routes>
      {ROUTES.map(({ path, element: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Component
              todos={todos}
              onEdit={onEdit}
              onCreate={onCreate}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          }
        />
      ))}
    </Routes>
  );
};

export default RouterDetails;
