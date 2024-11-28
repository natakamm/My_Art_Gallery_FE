import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/shared/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import Main_Gallery from "./pages/Main_Gallery";
import Profile from "./pages/Profile";
import { AuthContext } from "./context/AuthContext";
import Alert from "./components/shared/Alert";

const App = () => {
  const { token } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Alert />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!token ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/account"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/artworks" element={<Main_Gallery />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
