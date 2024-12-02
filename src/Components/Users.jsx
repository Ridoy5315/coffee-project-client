import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = (props) => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //deleted form database
        fetch(`http://localhost:8000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingUsers = users.filter(user => (user._id !== id))
              setUsers(remainingUsers);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Last Login At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => (
            <tr key={user._id}>
              <th>1</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user?.createdAt}</td>
              <td>{user?.lastSignInTime}</td>
              <td>
                <div className="flex gap-2">
                  <button className="btn">E</button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn"
                  >
                    X
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Users.propTypes = {};

export default Users;
