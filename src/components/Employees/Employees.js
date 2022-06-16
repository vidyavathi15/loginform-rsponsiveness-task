import { BiDotsVerticalRounded } from "react-icons/bi";
import React from 'react'

import EmployeeDrawer from "../EmployeeDrawer/EmployeeDrawer"
import "./Employees.css";

const Employee = () => {
  return (
    <>
     
        <div className="employee-body-container">
          <div className="employee-heading-container">
            <h1 className="my-heading">Employees</h1>
            <EmployeeDrawer />
          </div>
          <div className="employee-header">
            <h3 className='employee'>Employee</h3>
            <h3 className='role'>Role</h3>
          </div>
          <div className="list-items">
            <div className="list-details">
              <img
                src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
                alt="employee"
                className="employee-img"
              />
              <p style={{color:'#ffffff'}} >Naveen Challa</p>
            </div>

            <p style={{color:'#ffffff'}}>Role</p>
            <div>
              <BiDotsVerticalRounded style={{ color: "white" , marginRight:"10px"}} />
            </div>
          </div>

          <div className="list-items">
            <div className="list-details">
              <img
                src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
                alt="employee"
                className="employee-img"
              />
              <p style={{ color: "white" }}>Naveen Challa</p>
            </div>

            <p style={{ color: "white" }}>Role</p>
            <div>
              <BiDotsVerticalRounded style={{ color: "white", marginRight:"10px" }} />
            </div>
          </div>

          <div className="list-items">
            <div className="list-details">
              <img
                src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
                alt="employee"
                className="employee-img"
              />
              <p style={{ color: "white" }}>Naveen Challa</p>
            </div>

            <p style={{ color: "white"}}>Role</p>
            <div>
              <BiDotsVerticalRounded style={{ color: "white" , marginRight:"10px"}} />
            </div>
          </div>
          <div className="list-items">
            <div className="list-details">
              <img
                src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
                alt="employee"
                className="employee-img"
              />
              <p style={{ color: "white" }}>Naveen Challa</p>
            </div>

            <p style={{ color: "white" }}>Role</p>
            <div>
              <BiDotsVerticalRounded style={{ color: "white" , marginRight:"10px"}} />
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Employee;