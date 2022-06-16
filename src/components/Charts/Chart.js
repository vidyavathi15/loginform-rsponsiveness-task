import React from "react";

// import { FaCalendarDay } from "react-icons/fa";

// import { ImCross } from "react-icons/im";

// import { MdPeopleAlt, MdLocationOn } from "react-icons/md";

// import { IoMdPersonAdd } from "react-icons/io";

// import { GiNinjaMask } from "react-icons/gi";

import BarChart from "../BarChart/BarChart";

import NewPiChart from "../NewPiChart/NewPiChart";

import PiChart from "../PiChart/PiChart";

import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart";

import LowestOccupancyChart from "../LowestOccupancyChart/LowestOccupancyChart";


import LineChart from "../LineChart/LineChart";

import "./Chart.css";
import { list } from "../Dashboard/Dashboard";

export default function Chart() {
  return (
    <div className="chart-container">
      {list()}
      <div className="line-chart-pichart-container">
        <div>
        <div className="pichart-barchart">
          
          <LineChart />

        
          
          <div className="two-charts">
            <PiChart />
            <BarChart />
          </div>
          </div>
          <div className="three-charts">
            <HorizontalBarChart />

            <LowestOccupancyChart />
            <NewPiChart />
          </div>
        </div>
      </div>
    </div>
  );
}
