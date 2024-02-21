import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  
  const {user,setUser}=useContext(UserContext)

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  };

  return (
    <>

      <h2 className=" text-3xl mb-5 ml-10">Login</h2>
      <form onSubmit={handleSubmit} className=" text-lg ml-10">
        <div>

        <input
          type="text"
          className="userName"
          name="user"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
          />
        </div>
        <div>

        <input
          type="text"
          className="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
          />
          </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
