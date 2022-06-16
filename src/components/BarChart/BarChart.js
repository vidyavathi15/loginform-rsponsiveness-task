import React, { useState } from "react";

import { Bar } from "react-chartjs-2";

import "chart.js/auto";

import "./BarChart.css";

function BarChart() {
  const options = ["AllZones", "SpecificZones"];
  const [optionId, setOptionId] = useState(options[0]);

  const onChangeOptionId = (e) => {
    setOptionId(e.target.values);
  };
  return (
    <div className="barchat-container">
      <div className="detection-container">
        <p className="mask-detection">Social Distancing</p>
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
              label: "store 1",
              data: [335],

              borderColor: "red",
              // backgroundColor: "blue",  /// we should keep to add a color to fill is true
              // fill: true,
              backgroundColor: "#64b5f6",
              fill: true,

              pointBackgroundColor: "green",
              pointBorderColor: "yellow",
            },
            {
              label: "store 2",
              data: [200],

              borderColor: "pink",
              // backgroundColor:"red",
              // fill: true,  // we should keep fill is true, otherwise background-color not applicable

              backgroundColor: "#f06292",
              width: "20px",
              fill: true,
              pointBackgroundColor: "black",
              pointBorderColor: "red",
            },
          ],
        }}
        height={350}
        width={500} // her e only we need to keep heights and widths, not in barchat container
        // aspect ratio used to adjust height and width of a chart
        options={{
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                pointStyle: "Circle",
              },
              display: true,
              position: "right",
            },
          },

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

export default BarChart;
