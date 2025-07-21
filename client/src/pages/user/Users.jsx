import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Users = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get('https://ecommerce-back-e9fw.onrender.com/api/v1/auth/all-users');
      if (data?.success) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch users');
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className='container-fluid m-3 p-3'>
      <div className='row'>
        <div className='col-md-3'>
          {/* AdminMenu is already rendered in AdminDashboard */}
        </div>
        <div className='col-md-9'>
          <h3>All Users</h3>
          <div className='table-responsive'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
