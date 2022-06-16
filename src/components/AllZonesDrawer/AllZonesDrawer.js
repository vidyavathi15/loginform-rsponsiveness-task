import React, { useState } from "react";

import Popup from "reactjs-popup";

import { Box, Drawer, Typography, IconButton } from "@mui/material";

import { MdOutlineClose } from "react-icons/md";

import "./AllZonesDrawer.css";

function AllZonesDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const namesList = [
    "Diet foods",
    "Baby Products",
    "House-cleaning Products",
    "Billing Zone",
    "Snack foods",
    "frozen foods",
    "Rice",
  ];
  const cameraNamesList = ["CCTV1", "CCTV2", "CCTV3", "CCTV4", "CCTV5"];

  const [nameId, setNameId] = useState(namesList[0]);

  const [zoneLoactionId, setZoneLocationId] = useState("");

  const [cameraId, setCameraId] = useState(cameraNamesList[0]);

  const onChangeNameId = (e) => {
    setNameId(e.target.value);
  };

  const onChangeZoneLocationId = (e) => {
    setZoneLocationId(e.target.value);
  };

  const onChangeCameraId = (e) => {
    setCameraId(e.target.value);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="bottom"
        arial-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <button type="button" className="create-btn">
          Create New
        </button>
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
            Add New Zone
          </Typography>
          <div className="details-contaner">
            <div className="data-container">
              <div className="drawer-feilds">
                <p className="field-label">ZONE NAMES</p>

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
                value={zoneLoactionId}
                onChange={onChangeZoneLocationId}
                placeholder="Zone Location"
              />
              <div className="cameras-container">
                <div className="camera-container">
                  <input type="checkbox" className="checkbox-zone" />
                  <p className="camera-name">Camera 1</p>
                </div>
                <div className="camera-container">
                  <input type="checkbox" className="checkbox-zone" />
                  <p className="camera-name">Camera 2</p>
                </div>
                <div className="camera-container">
                  <input type="checkbox" className="checkbox-zone" />
                  <p className="camera-name">Camera 3</p>
                </div>
                <div className="camera-container">
                  <input type="checkbox" className="checkbox-zone" />
                  <p className="camera-name">Camera 4</p>
                </div>
                <div className="camera-container">
                  <input type="checkbox" className="checkbox-zone" />
                  <p className="camera-name">Camera 5</p>
                </div>
              
            

            <div className="zone-popup-container">
              <Popup
                modal
                trigger={
                  <button type="button"  style={{backgroundColor:"transparent", height:"0px"}} className="add-new-camera-button">
                    Add New Camera
                  </button>
                }
              >
                {close => (
                  <>
                  <div className="modal-content">
                    <div className="popup-top-container">
                  <p style={{ color: "white" }}>Add Camera</p>
                  <button type="button" onClick={() => close()} className="close-icon-pop">
                    <MdOutlineClose style={{fontSize:"30px"}}/>
                  </button>
                  </div>
                  <div className="camera-Id-container">
                    <p style={{ color: "#9e9e9e" }}>CAMERA NAME</p>
                    <select
                      value={cameraId}
                      onChange={onChangeCameraId}
                      className="camera-names-list"
                    >
                      {cameraNamesList.map((eachOption) => (
                        <option key={eachOption}>{eachOption}</option>
                      ))}
                    </select>
                  </div>
                  <div className="two-buttons">
                    <button type="button" className="cancel-btn">
                      Cancel
                    </button>
                    <button
                      type="button"
                      style={{ marginRight: "12px" }}
                      className="create-btn"
                    >
                      Add
                    </button>
                  </div>
                </div>
               
                </>




                )}
                
                
              </Popup>
            </div>
            </div>
          </div>
          </div>

          <div className="popup-button-container">
            <button type="button" className="cancel-btn">
              Cancel
            </button>
            <button type="button" className="create-btn">
              Create
            </button>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}

export default AllZonesDrawer;
