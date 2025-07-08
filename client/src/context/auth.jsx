import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
// Create the context
const AuthContext = createContext();


// AuthProvider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  });

  //default axios so that we can use where needed like in private.jsx
  axios.defaults.headers.common['Authorization'] = auth?.token

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []); //  run only once on first load

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

// Export components
export { useAuth, AuthProvider };
