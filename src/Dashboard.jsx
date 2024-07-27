import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between bg-blue-200 p-3">
        <h2>Home</h2>
        <h2>
          <Link to="/create-employee">Create Employee</Link>
        </h2>
        <h2>
          <Link to="/employee-list">Employee List</Link>
        </h2>
        <h2>Name</h2>
        <h2>
          <Link to="/login">Logout</Link>
        </h2>
      </div>
      <div>
        <h1 className="bg-yellow-200 text-2xl">Dashboard</h1>
        <p className="text-2xl text-center">Welcome to admin panel</p>
      </div>
    </div>
  );
};

export default Dashboard;
