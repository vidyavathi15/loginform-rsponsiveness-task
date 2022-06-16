import React, { useState } from "react";
import { Box, Drawer, Typography, IconButton } from "@mui/material";

import { TbCameraPlus } from "react-icons/tb";



import "./EmployeeDrawer.css";

function EmployeeDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const namesList = ["vidya", "vinay", "prem"];
  const rolesList = ["HR", "StoreIncharge", "Purchase Head"];

  const [nameId, setNameId] = useState(namesList[0]);
  const [emailId, setEmailId] = useState(rolesList[0]);

  const onChangeNameId = (e) => {
    setNameId(e.target.value);
  };

  const onChangeEmailId = (e) => {
    setEmailId(e.target.value);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="bottom"
        arial-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <button type="button" className="create-btn">Create New</button>
      </IconButton>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          style={{
            backgroundColor: "#292929",
            height: "100vh",
            backgroundSize: "cover",
          }}
          width="250px"
          p={2}
          textAlign="center"
          role="presentation"
        >
          <Typography varient="h1" sx={{ fontSize: "30px", color: "#b7b1b1" }}>
            Notifications
          </Typography>
          <div className="details-contaner">
            <div className="data-container">
              <div className="capture-container">
                <TbCameraPlus className="camera-icon" />
              </div>
              <div className="drawer-feilds">
                <p className="field-label">NAME OF EMPLOYEE</p>


                <select
                  value={nameId}
                  onChange={onChangeNameId}
                  className="names-list"
                >
                  {namesList.map((eachOption) => (
                    <option key={eachOption}> {eachOption}</option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                className=" email-text"
                onChange={onChangeEmailId}
                placeholder="Email"
              />
              <div className="drawer-feilds">
                <p className="field-label">ASSIGN ROLE</p>
                <select
                  value={emailId}
                  onChange={onChangeEmailId}
                  className="names-list"
                >
                  {rolesList.map((eachOption) => (
                    <option key={eachOption}> {eachOption}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-container">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button type="button" className="create-btn">
                Create
              </button>
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}

export default EmployeeDrawer;
