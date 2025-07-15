import { useState, useEffect } from 'react';
import { useAuth } from "../../context/auth";
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get('/api/v1/auth/user-auth');
        if (res.data.ok) {
          setOk(true);
        }
      } catch (error) {
        setOk(false);
      } finally {
        setChecked(true);
      }
    };

    if (auth?.token) {
      authCheck();
    } else {
      setChecked(true); // still mark checked to allow redirect
    }
  }, [auth?.token]);

  if (!checked) return null; // or fallback like <div>Loading...</div>

  return ok ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
