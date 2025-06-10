import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Render React app
createRoot(document.getElementById("root")!).render(<App />);

// Register Service Worker for PWA support
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((err) => {
        console.log("Service Worker registration failed:", err);
      });
  });
}
