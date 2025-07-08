import { useState, useEffect } from 'react';
import { useAuth } from "../../context/auth";
import { Outlet } from 'react-router-dom';
import axios from 'axios';
// import Spinner from './spinner';

function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth(); // use context, not useState

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/user-auth`,
          {
            headers: {
              Authorization: auth?.token,
            },
          }
        );
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : null; // prevents blank screen
}

export default PrivateRoute;
