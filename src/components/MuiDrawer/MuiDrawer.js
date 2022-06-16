import React, { useState } from "react";
import { Box, Drawer, Typography, IconButton } from "@mui/material";

import { BsFillBellFill } from "react-icons/bs";

import "./MuiDrawer.css";

function MuiDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <IconButton
        size="large"
        // edge="bottom"
        arial-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <BsFillBellFill className="notification-icon" />
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
          width="300px"
          p={2}
        >
          <Typography
            varient="h1"
            sx={{
              fontSize: "30px",
              color: "#b7b1b1",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Notifications
          </Typography>
          <div className="notification-item">
            <span class="icon-attendence icon"></span>
            <div className="text-container">
              <h1 className="notification-heading">
                Naveen marked his attendance
              </h1>
              <p className="notification-date"> may 26 2020 10:00 AM</p>
            </div>
          </div>

          <div className="notification-item">
            <BsFillBellFill className="icon" />


            <div className="text-container">
              <h1 className="notification-heading">Alert</h1>
              <p className="notification-date"> may 26 2020 10:00 AM</p>
            </div>
          </div>
          <div className="notification-item">
            <span class="icon-attendence-copy-7 icon"></span>
            <div className="text-container">
              <h1 className="notification-heading">Baby Zone Error</h1>
              <p className="notification-date"> may 26 2020 10:00 AM</p>
            </div>
          </div>
          <div className="notification-item">

            <span class="icon-covid-19 icon"></span>

            <div className="text-container">
              <h1 className="notification-heading">Polar Zone Added</h1>
              <p className="notification-date"> may 26 2020 10:00 AM</p>
            </div>
          </div>
          <div className="notification-item">
            <span class="icon-dashboard icon"></span>
            <div className="text-container">
              <h1 className="notification-heading">
                Without mask at baby products
              </h1>
              <p className="notification-date"> may 26 2020 10:00 AM</p>
            </div>
          </div>
          <div className="notification-item">
            <span class="icon-zones icon"></span>
            <div className="text-container">
              <h1 className="notification-heading">Baby Zone Error</h1>
              <p className="notification-date"> may 26 2020 10:00 AM</p>
            </div>
          </div>
          <div className="notification-item">
            <span class="icon-zones icon"></span>
            <div className="text-container">
              <h1 className="notification-heading">Polar Zone Added</h1>
              <p className="notification-date"> may 26 2020 10:00 AM</p>
            </div>
          </div>
          <div className="notification-item">

            <span class="icon-menu-copy-15 icon"></span>

            <div className="text-container">
              <h1 className="notification-heading">
                Naveen marked his attendance
              </h1>
              <p className="notification-date"> may 26 2020 10:00 AM</p>
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}

export default MuiDrawer;
