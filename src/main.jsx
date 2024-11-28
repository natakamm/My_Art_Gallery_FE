import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import ProjectContextProvider from "./context/ProjectContext.jsx";
import { AlertContextProvider } from "./context/AlertContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    <AlertContextProvider>
      <AuthContextProvider>
        <UserContextProvider>
          <ProjectContextProvider>
            <App />
          </ProjectContextProvider>
        </UserContextProvider>
      </AuthContextProvider>{" "}
    </AlertContextProvider>
  </BrowserRouter>
);
