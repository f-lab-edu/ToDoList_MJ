import "./App.css";
import Header from "./components/Header";
import RouterDetails from "./router/RouterDetails";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, onCreate, onDelete, onEdit, onUpdate } = useTodos();
  return (
    <>
      <div className="area">
        <Header />
        <RouterDetails
          todos={todos}
          onEdit={onEdit}
          onCreate={onCreate}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      </div>
    </>
  );
}

export default App;
