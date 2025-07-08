import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';
import { Outlet, useLocation } from 'react-router-dom';
import "../../styles/UserDashboard.css";

const UserDashboard = () => {
  const [auth] = useAuth();
  const location = useLocation();

  // Show user info only on the base route, not nested ones
  const isMainDashboard = location.pathname === "/dashboard/user";

  return (
    <Layout>
      <div className='container-fluid user-dashboard-container'>
        <div className='row' style={{ margin: 0 }}>
          <div className='col-md-3 user-sidebar'>
            <UserMenu />
          </div>
          <div className='col-md-9 user-content'>
            {isMainDashboard && (
              <div className='user-info-card'>
                <h3>User Information</h3>
                <div className='user-info-item'>
                  <span className='user-info-label'>Name:</span> 
                  {auth?.user?.name}
                </div>
                <div className='user-info-item'>
                  <span className='user-info-label'>Email:</span> 
                  {auth?.user?.email}
                </div>
                <div className='user-info-item'>
                  <span className='user-info-label'>Contact No.:</span> 
                  {auth?.user?.phone || 'Not provided'}
                </div>
              </div>
            )}
            <div className='user-outlet-container'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;