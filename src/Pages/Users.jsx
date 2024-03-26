import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Assets/Styles/Users.css"
import Base_URL from '../Common/Apis';
import Loader from '../Components/Loader';
import Swal from 'sweetalert2'; // Import SweetAlert library

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_URL}user/getuser`);
        if (response.data.success) {
          setUsers(response.data.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.get(`${Base_URL}user/delete/${id}`);
      setUsers(users.filter(user => user._id !== id));
      Swal.fire({
        icon: 'success',
        title: 'User Deleted Successfully!',
        showConfirmButton: false,
        timer: 1500,
        // zIndex:99999999
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to delete user. Please try again later.',
      });
    }
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
      }
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <h2 className="text-center mb-4">Users</h2>
          <div className="row">
            <div className="col-lg-12 d-none d-lg-block">
              <table className="table table-striped table-bordered text-center custom-table">
                <thead className="thead-dark">
                  <tr>
                    <th>User Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th>User Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.userName}</td>
                      <td>{user.mobileNumber}</td>
                      <td>{user.email}</td>
                      <td>{user.userType}</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger" onClick={() => confirmDelete(user._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {users.map((user, index) => (
              <div key={index} className="col-12 d-lg-none mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.userName}</h5>
                    <p className="card-text">Mobile Number: {user.mobileNumber}</p>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">User Type: {user.userType}</p>
                    <div className="actions">
                      <button className="btn btn-primary buttons">Edit</button>
                      <button className="btn btn-danger buttons" onClick={() => confirmDelete(user._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
