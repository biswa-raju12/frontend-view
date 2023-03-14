import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [users, setUsers] = useState({
    userFirstName: "",
    userLastName: "",
    userAge: "",
  });

  const{userFirstName,userLastName,userAge}=users;

  const onInputChange = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8088/users",users);
    alert("Hurray...User Added Successfully!!")
    navigate("/");
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border shadow rounded p-4 mt-2">
          <h2 className=" text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Firstname" className="form-label">
                First Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your First Name"
                name="userFirstName"
                value={userFirstName}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Lastname" className="form-label">
                Last Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Last Name"
                name="userLastName"
                value={userLastName}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Age" className="form-label">
                Age
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Your Age"
                name="userAge"
                value={userAge}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link to='/' type="submit" className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
