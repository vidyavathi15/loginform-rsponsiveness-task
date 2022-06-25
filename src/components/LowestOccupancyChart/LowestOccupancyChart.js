import React, { useState } from "react";

import { Bar } from "react-chartjs-2";

import "chart.js/auto";

import "./LowestOccupancyChart.css";

function LowestOccupancyChart() {
  const options = ["AllZones", "SpecificZones"];
  const [optionId, setOptionId] = useState(options[0]);

  const onChangeOptionId = (e) => {
    setOptionId(e.target.value);
  };
  return (
    <div className="barchat-container-lowest">
      <div className="detection-container">
        <p className="mask-detection">Lowest Occupacy</p>
        <select
          className="dropdown-container"
          value={optionId}
          onChange={onChangeOptionId}
        >
          {options.map((eachOption) => (
            <option key={eachOption}>{eachOption}</option>
          ))}
        </select>
      </div>

      <Bar
        data={{
          labels: ["jan"],

          datasets: [
            {
              data: [700],

              borderColor: "red",
              // backgroundColor: "blue",  /// we should keep to add a color to fill is true
              // fill: true,
              backgroundColor: "#1eb980",
              fill: true,
              barPercentage: 0.3,

              pointBackgroundColor: "green",
              pointBorderColor: "yellow",
              tension: 0.3, // curved line
            },
            {
              data: [500],

              borderColor: "pink",
              // backgroundColor:"red",
              // fill: true,  // we should keep fill is true, otherwise background-color not applicable

              backgroundColor: "#1eb980",

              fill: true,
              barPercentage: 0.3, // we can reduce bar size

              pointBackgroundColor: "black",
              pointBorderColor: "red",
              tension: 0.3, // curved line
            },
            {
              data: [400],

              borderColor: "pink",
              // backgroundColor:"red",
              // fill: true,  // we should keep fill is true, otherwise background-color not applicable

              backgroundColor: "#1eb980",

              fill: true,
              barPercentage: 0.3, // we can reduce width of bar

              pointBackgroundColor: "black",
              pointBorderColor: "red",
              tension: 0.3, // curved line
            },
          ],
        }}
        height={150}
        width={400}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },

          indexAxis: "y", // if we want horizontal bargraph , keep indexaxis is y

          // title: {
          //   display: true,
          //   text: "Bar Chart",
          // },

          scales: {
            x: {
              display: false,
            },

            y: {
              display: false,
              ticks: {
                display: false,
                min: 0,
                max: 700,
                stepSize: 100,
              },
            },
          },
          //
        }}
      ></Bar>
    </div>
  );
}

export default LowestOccupancyChart;
