import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root: HTMLElement | null = document.getElementById("root");

if (root === null)
  throw new Error(`An element with the ID of "root" does not exist`);

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
