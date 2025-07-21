import { useState, useEffect } from 'react';
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get('/api/v1/auth/user-auth');
        if (res.data.ok) {
          setOk(true);
        } else {
          navigate("/login");
        }
      } catch (error) {
        navigate("/login");
      }
    };

    if (auth?.token) authCheck();
    else navigate("/login");
  }, [auth?.token, navigate]);

  return ok ? <Outlet /> : null;
}

export default PrivateRoute;
