import { createContext, useState, useContext } from "react";

export const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  // Function to show a new alert
  const showAlert = (message, type) => {
    const id = new Date().getTime(); // Unique ID for each alert
    const newAlert = { id, message, type, isVisible: true };

    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

    // Fade out after 3 seconds
    setTimeout(() => {
      setAlerts((prevAlerts) =>
        prevAlerts.map((alert) =>
          alert.id === id ? { ...alert, isVisible: false } : alert
        )
      );
    }, 3000); // Show for 3 seconds before fading out

    // Remove alert after 4 seconds (after fade-out completes)
    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
    }, 4000); // Completely remove after fade-out
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
