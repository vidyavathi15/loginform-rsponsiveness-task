import React from "react";
import { FaCalendarDay } from "react-icons/fa";
// import {TiTick} from 'react-icons/ti'
import { ImCross } from "react-icons/im";
import { MdPeopleAlt, MdLocationOn } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { GiNinjaMask } from "react-icons/gi";
import { Link } from "react-router-dom";
// import Chart from "../Charts/Chart";
import "./Dashboard.css";

export const list = () => {
  return (
    <ul className="list-container">
      <li className="list-item">
        <div className="dashboard">
          <FaCalendarDay className="icon" />
          <div>
            <h1 className="list-heading">Total Employees</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="dashboard-green">
          <ImCross className="icon" />
          <div>
            <h1 className="list-heading">Absent Employees</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <Link to="/total-customers">
        <li className="list-item">
          <div className="dashboard-red">
            <MdPeopleAlt className="icon" />
            <div>
              <h1 className="list-heading">Total Customers</h1>
              <p className="list-desc">254</p>
            </div>
          </div>
        </li>
      </Link>
      <li className="list-item">
        <div className="dashboard-violet">
          <GiNinjaMask className="icon" />
          <div>
            <h1 className="list-heading">Mask Detection</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="dashboard-red">
          <MdPeopleAlt className="icon" />
          <div>
            <h1 className="list-heading">Social Distancing</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="dashboard-green">
          <IoMdPersonAdd className="icon" />
          <div>
            <h1 className="list-heading">New Customers</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="dashboard">
          <MdLocationOn className="icon" />
          <div>
            <h1 className="list-heading">Total Employees</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

const Dashboard = (props) => {
  console.log(props);
  console.log("dashboard called");
  return (
    <div className="dashboard-container">
      <div className="logo-address-container">
        <img
          src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
          alt="profile"
          className="profile-img"
        />
        <div>
          <p className="wishing-text">
            Good Morning, <span className="color-text">Nagaraju C</span>
          </p>

          <p className="wishing-text">Spar, Kothaguda, Hyderabad</p>
          {list()}
          
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
