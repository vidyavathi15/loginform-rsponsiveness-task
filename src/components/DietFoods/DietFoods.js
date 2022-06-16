import React from 'react'

import {FaGreaterThan} from "react-icons/fa"


import "./DietFoods.css"
function DietFoods() {



  return (
    <div className="all-cameras-app-container">
      <div className="all-cameras-header">
      <div className="diet-foods-sub-header">
          <div className="diet-foods-sub-header">
          <p>All Zones</p>
          <FaGreaterThan />
          </div>
          <p>Diet foods</p>
          </div>
        

         
        
        <div className="all-cam-icon-container">
          <p>Heat Map</p>
          <button type="button" className="map-toggle">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </button>
        </div>
      </div>
      <div className="all-images-containers">
      
      <div className="each-camera-container">
       
       <div className="image-bg-container">
       <p className="each-zone-name">CCTV1</p>
       <div className='camera-details' >
       <p>0:45:30</p>
         <button type="button" className='person-button'>20 persons</button>

       </div>
        
        
       </div>
       </div>


       <div className="each-camera-container">
       
       <div className="image-bg-container1">
       <p className="each-zone-name">CCTV2</p>
       <div className='camera-details' >
       <p>0:45:30</p>
         <button type="button" className='person-button'>20 persons</button>

       </div>
        
        
       </div>
       </div> 



       <div className="each-camera-container">
       
       <div className="image-bg-container">
       <p className="each-zone-name">CCTV3</p>
       <div className='camera-details' >
       <p>0:45:30</p>
         <button type="button" className='person-button'>20 persons</button>

       </div>
        
        
       </div>
       </div>



       <div className="each-camera-container">
       
       <div className="image-bg-container1">
       <p className="each-zone-name">CCTV4</p>
       <div className='camera-details' >
       <p>0:45:30</p>
         <button type="button" className='person-button'>20 persons</button>

       </div>
        
        
       </div>
       </div>



       <div className="each-camera-container">
       
       <div className="image-bg-container">
       <p className="each-zone-name">CCTV5</p>
       <div className='camera-details' >
       <p>0:45:30</p>
         <button type="button" className='person-button'>20 persons</button>

       </div>
        
        
       </div>
       </div>


       <div className="each-camera-container">
       
       <div className="image-bg-container">
       <p className="each-zone-name">CCTV6</p>
       <div className='camera-details' >
       <p>0:45:30</p>
         <button type="button" className='person-button'>20 persons</button>

       </div>
        
        
       </div>
       </div>
       </div>








    </div>
  )
}

export default DietFoods