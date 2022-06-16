import React from "react";

// import EmployeeDrawer from "../EmployeeDrawer/EmployeeDrawer"

import RolesDrawer from "../RolesDrawer/RolesDrawer";

import RolesSidebar from "../RolesSidebar/RolesSidebar";


import "./Roles.css";

function Roles() {
  return (
    <div className="roles-bg-container">
      <div className="roles-header-container">
        <h1 className="my-heading">Roles</h1>
        <RolesDrawer />
      </div>
      <hr className="hr-line" />
      <div className="roles-permission-container">
        <p className="roles-heading">Roles</p>
        <p className="permission-heading">Permissions</p>
      </div>
      <div className="side-bar-and-roles-container">
        <RolesSidebar />
        <div className="permission-data-container">
          <table>
            <tr className="table-row">
              <th className="module-heading">Modules</th>
              <th className="edit-heding">Edit</th>
              <th className="edit-heding">Delete</th>
              <th className="edit-heding">Create</th>
              <th className="edit-heding">Delete</th>
            </tr>

            <tr>
              <th className="zones-role">Zones</th>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" checked></span>
                </label>
              </td>

              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
            <tr>
              <th className="zones-role">Employees</th>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
            <tr>
              <th className="zones-role">Covid Complains</th>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>{" "}
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Roles;
