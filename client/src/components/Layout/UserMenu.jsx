import React from 'react';
import { NavLink } from 'react-router-dom';


const UserMenu = () => {
  return (
    <div className="text-center">
      <div className="list-group">
       <div className="list-group">
        <NavLink to="/dashboard/user" className="list-group-item list-group-item-action fw-bold bg-dark text-white">
          <h4 className="mb-0 text-white">User Panel</h4>
           </NavLink>
         </div>

        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action"
        >
          Orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
