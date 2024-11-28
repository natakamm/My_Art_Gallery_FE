import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login, logout, token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  const fetchUserData = async (retry = true) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://my-art-gallery-be.onrender.com/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to fetch user information.");
        setLoading(false);
        return;
      }

      setUser(data);
    } catch (error) {
      console.log(error);
      setError(error.message || "An error occurred while fetching user data.");
      if (retry) {
        setTimeout(() => fetchUserData(false), 5000);
      }
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (identifier, password) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(
        "https://my-art-gallery-be.onrender.com/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed.");
        return;
      }

      login(data.token);
      await fetchUserData();
    } catch (error) {
      setError(error.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  const signUpUser = async (username, email, password) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(
        "https://my-art-gallery-be.onrender.com/user/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Signup failed.");
        setLoading(false);
        return;
      }
      login(data.token);
      await fetchUserData();
    } catch (error) {
      setError(error.message || "An error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    logout();
    setUser(null);
  };

  const updateUserDetails = async (email, username) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://my-art-gallery-be.onrender.com/user/profile/details",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ email, username }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }
      console.log("Updated user:", data);
      setUser(data);
    } catch (error) {
      setError(
        error.message || "An error occurred while updating user details."
      );
    } finally {
      setLoading(false);
    }
  };

  const updateAvatar = async (file) => {
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await fetch(
        "https://my-art-gallery-be.onrender.com/user/profile/avatar",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }
      setUser(data);
    } catch (error) {
      setError(error.message || "An error occurred during avatar update");
    } finally {
      setLoading(false);
    }
  };

  const deactivateUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://my-art-gallery-be.onrender.com/user/delete-account",
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to deactivate user account");
        setLoading(false);
        return;
      }
      logout();
      setUser(null);
    } catch (error) {
      setError(
        error.message || "An error occurred during account deactivation"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setError,
        error,
        loginUser,
        signUpUser,
        logoutUser,
        fetchUserData,
        updateUserDetails,
        updateAvatar,
        deactivateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
