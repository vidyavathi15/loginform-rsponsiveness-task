import MainHeader from "./MainHeader";

import MenuIcons from "./MenuIcons";
import { BiDotsVerticalRounded } from "react-icons/bi";

import "./Employee.css";

const Employee = () => {
  return (
    <>
      <MainHeader />
      <div className="employee-container">
        <MenuIcons />
        <div className="employee-body-container">
          <div className="all-zone-heading-container">
            <h1 className="my-heading">Employees</h1>
            <button className="create-new-button">CREATE NEW</button>
          </div>
          <div className="employee-header">
            <h3 style={{ marginRight: "20px", color: "white" }}>Employee</h3>
            <h3 style={{ marginLeft: "46%", color: "white" }}>Role</h3>
          </div>
          <div className="list-items">
            <div className="list-details">
              <img
                src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
                alt="employee"
                className="employee-img"
              />
              <p style={{ color: "white"  }}>Naveen Challa</p>
            </div>

            <p style={{ color: "white" }}>Role</p>
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

            <p style={{ color: "white" }}>Role</p>
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
      </div>
    </>
  );
};

export default Employee;
