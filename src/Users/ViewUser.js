import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    userFirstName: "",
    userLastName: "",
    userAge: "",
  });

   const{userFirstName,userLastName,userAge}=user;

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8088/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border shadow rounded p-4 mt-2">
          <h2 className=" m-4 text-center">User Details</h2>

          <div className="card ">
            <div className="card-header">Details of User ID: {id}</div>
            <div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name: </b>
                  {userFirstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name: </b>
                  {userLastName}
                </li>
                <li className="list-group-item">
                  <b>Age: </b>
                  {userAge}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary mt-2 text-center " to={"/"}>
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
