import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const {id}=useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8088/users");
    setUsers(result.data);
  };

  const DeleteUser = async (id) =>{
    await axios.delete(`http://localhost:8088/users/${id}`);
    loadUsers();
  }

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() +1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  return (
    <div className="container">
      <div className="py-4">
        <h3>Attendance : {currentDate}</h3>
      </div>

      <table className="table text-center w-90 shadow table-success border-light table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td key={index}>
                {index + 1}
              </td>
              <td>{user.userFirstName}</td>
              <td>{user.userLastName}</td>
              <td>{user.userAge}</td>
              <td>
              <Link to={`/viewUser/${user.userId}`}className="btn btn-primary mx-2">
                  View User
                </Link>
                <Link to= {`/updateUser/${user.userId}`} className="btn btn-outline-success mx-2">
                  Update User
                </Link>
                <Link onClick={()=>DeleteUser(user.userId)} className="btn btn-outline-danger mx-2">Delete User</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
