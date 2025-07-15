import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <div className='text-center'>
      <div className="list-group">
      <NavLink to="/dashboardadmin" className="list-group-item list-group-item-action fw-bold bg-dark text-white">
        <h4 className="mb-0 text-white">Admin Panel</h4>
      </NavLink>

        <NavLink
          to="/dashboardadmin/admin/create-category"
          className="list-group-item list-group-item-action"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboardadmin/admin/create-product"
          className="list-group-item list-group-item-action"
        >
          Create Product
        </NavLink>

         <NavLink
          to="/dashboardadmin/admin/products"
          className="list-group-item list-group-item-action"
        >
          Products
        </NavLink>

        <NavLink
          to="/dashboardadmin/admin/orders"
          className="list-group-item list-group-item-action"
        >
         Orders
        </NavLink>


        <NavLink
          to="/dashboardadmin/admin/users"
          className="list-group-item list-group-item-action"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
