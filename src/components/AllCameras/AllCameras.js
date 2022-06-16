import React from "react";


import "./AllCameras.css";

function AllCameras() {
  return (
    <div className="all-cameras-app-container">
      <div className="all-cameras-header">
        <p style={{color:"white"}}>All Zones</p>
        <div className="all-cam-icon-container">
          <p style={{color:"white"}}>Heat Map</p>
          <button type="button" className="map-toggle">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </button>
        </div>
      </div>
      
      <div className="all-cameras-list-container">
      <div className="each-camera-container">
        <div className="each-camera-header">
          <p className="each-zone-name">Diet foods</p>
          <p className="each-zone-name">20 persons</p>
        </div>
        <div className="image-bg-container">
          <p>CCTV4</p>
          <p>0:45:30</p>
        </div>
        <ul className="thumbnails-list-containers">
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera1"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV1</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera2"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV2</p>
          </li>

          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV3</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV4</p>
          </li>

          <li>
            
            <span class="icon-menu-copy-15"></span>



          
           
          </li>
        </ul>
      </div>
      <div className="each-camera-container">
        <div className="each-camera-header">
          <p className="each-zone-name">Baby Products</p>
          <p className="each-zone-name">20 persons</p>
        </div>
        <div className="image-bg-container1">
          <p>CCTV4</p>
          <p>0:45:30</p>
        </div>
        <ul className="thumbnails-list-containers">
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera1"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV1</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera2"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV2</p>
          </li>

          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV3</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV4</p>
          </li>


          <li>
            <span class="icon-menu-copy-15"></span>
          </li>
        </ul>
      </div>
      <div className="each-camera-container">
        <div className="each-camera-header">
          <p className="each-zone-name">House-cleaning products</p>
          <p className="each-zone-name">20 persons</p>
        </div>
        <div className="image-bg-container2">
          <p>CCTV4</p>
          <p>0:45:30</p>
        </div>
        <ul className="thumbnails-list-containers">
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera1"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV1</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera2"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV2</p>
          </li>

          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV3</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV4</p>
          </li>

          <li>
            <span class="icon-menu-copy-15"></span>
          </li>
        </ul>
      </div>
      <div className="each-camera-container">
        <div className="each-camera-header">
          <p className="each-zone-name">Billig Zone</p>
          <p className="each-zone-name">20 persons</p>
        </div>
        <div className="image-bg-container3">
          <p>CCTV4</p>
          <p>0:45:30</p>
        </div>
        <ul className="thumbnails-list-containers">
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera1"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV1</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera2"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV2</p>
          </li>

          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV3</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV4</p>
          </li>

          <li>
            <span class="icon-menu-copy-15"></span>
          </li>
        </ul>
      </div>
      <div className="each-camera-container">
        <div className="each-camera-header">
          <p className="each-zone-name">Snack foods</p>
          <p className="each-zone-name">20 persons</p>
        </div>
        <div className="image-bg-container4">
          <p>CCTV4</p>
          <p>0:45:30</p>
        </div>
        <ul className="thumbnails-list-containers">
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera1"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV1</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera2"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV2</p>
          </li>

          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV3</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV4</p>
          </li>

          <li>
            <span class="icon-menu-copy-15"></span>
          </li>
        </ul>
      </div>
      <div className="each-camera-container">
        <div className="each-camera-header">
          <p className="each-zone-name">Frozen foods</p>
          <p className="each-zone-name">20 persons</p>
        </div>
        <div className="image-bg-container5">
          <p>CCTV4</p>
          <p>0:45:30</p>
        </div>
        <ul className="thumbnails-list-containers">
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera1"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV1</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera2"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV2</p>
          </li>

          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV3</p>
          </li>
          <li className="thumbnail-item">
            <img
              style={{ height: "50px", width: "100%" }}
              src="https://res.cloudinary.com/dzhyal5op/image/upload/v1655124252/shoppingImage_fsbhwm.jpg"
              alt="camera3"
            />
            <p style={{ color: "white", fontSize: "13px" }}>CCTV4</p>
          </li>

          <li>
          <span class="icon-menu-copy-15"></span>
          
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default AllCameras;
