import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
