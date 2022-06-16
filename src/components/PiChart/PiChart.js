import React, { useState } from "react";

import { Doughnut } from "react-chartjs-2";



import "chart.js/auto";

import "./PiChart.css";

function DoughnutCharts() {
  const options = ["AllZones", "SpecificZones"];
  const [optionId, setOptionId] = useState(options[0]);

  const onChangeOptionId = (e) => {
    setOptionId(e.target.values);
  };
  return (
    <div className="doughnet-container">
      <div className="detection-container">
        <p className="mask-detection">Mask Detection</p>
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

      <Doughnut
        data={{
          labels: ["with mask", "without mask"],

          datasets: [
            {
              label: "store 1",
              data: [5, 5],

              borderColor: "red",
              // backgroundColor: "blue",  /// we should keep to add a color to fill is true
              // fill: true,
              backgroundColor: ["#ff6859", "#1eb980"],

              fill: true,

              pointBackgroundColor: "green",
              pointBorderColor: "yellow",
              // curved line
            },
          ],
        }}
        height={10}
        width={4}
        options={{
          maintainAspectRatio: false,
          radius: "50%",

          title: {
            display: true,
            text: "Doughnut Chart",
          },
          doughnutlabel: {
            labels: [{
              text: '550',
              font: {
                size: 20,
                weight: 'bold'
              }
            }, {
              text: 'total'
            }]
          }


        

          // elements: {
          //   center: {
          //     text: 'Red is 2/3 the total numbers',
          //     color: '#FF6384', // Default is #000000
          //     fontStyle: 'Arial', // Default is Arial
          //     sidePadding: 20, // Default is 20 (as a percentage)
          //     minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
          //     lineHeight: 25 // Default is 25 (in px), used for when text wraps
          //   }
          // }
        }}
      ></Doughnut>
    </div>
  );
}

export default DoughnutCharts;
