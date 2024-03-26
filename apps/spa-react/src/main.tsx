import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./nordic-store/app";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
