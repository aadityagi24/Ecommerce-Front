import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/layout/AdminMenu';
import { useAuth } from '../../context/auth';
import { Outlet, useLocation } from 'react-router-dom';
import "../../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [auth] = useAuth();
  const location = useLocation();

  // Show admin info only on the base route, not nested ones
  const isMainDashboard = location.pathname === "/dashboardadmin";

  return (
    <Layout>
      <div className='container-fluid admin-dashboard-container'>
        <div className='row' style={{ margin: 0 }}>
          <div className='col-md-3 admin-sidebar'>
            <AdminMenu />
          </div>
          <div className='col-md-9 admin-content'>
            {isMainDashboard && (
              <div className='admin-info-card'>
                <h3>Admin Information</h3>
                <div className='admin-info-item'>
                  <span className='admin-info-label'>Name:</span> 
                  {auth?.user?.name}
                </div>
                 <div className='admin-info-item'>
                  <span className='admin-info-label'>Email:</span> 
                  {auth?.user?.email}
                </div>
                 <div className='admin-info-item'>
                  <span className='admin-info-label'>Contact No. :</span> 
                  {auth?.user?.phone}
                </div>
                {/* ... other info items */}
              </div>
            )}
            <div className='admin-outlet-container'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
