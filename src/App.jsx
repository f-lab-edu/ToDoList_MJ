import "./App.css";
import Header from "./components/Header";
import RouterDetails from "./router/RouterDetails";
import { TodosProvider } from "./context/TodosContext";

function App() {
  return (
    <>
      <div className="area">
        <Header />
        <TodosProvider>
          <RouterDetails />
        </TodosProvider>
      </div>
    </>
  );
}

export default App;
