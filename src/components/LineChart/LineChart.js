import React, { useState } from "react";

import CalenderItem from "../CalenderItem/CalenderItem";

import { Line } from "react-chartjs-2";

import "chart.js/auto";

import "./LineChart.css";

function LineChart() {
  const calenderNamesList = [
    { id: "Day", text: "Day" },
    { id: "Week", text: "Week" },
    { id: "Month", text: "Month" },
  ];

  

 

  const [calenderDayNameId, setCalenderDayNameId] = useState(
    calenderNamesList[0].id
  );

  const updateCalenderName = (activeId) => {
    setCalenderDayNameId(activeId);
  };

  

  return (
    <div className="line-chart-app-container">
      <div className="line-chart-header">
        <p style={{ color: "white" }}>Customers</p>
        <div className="day-and-month">
          <ul className="calender-list">
            {calenderNamesList.map((eachName) => (
              <CalenderItem
                key={eachName.id}
                calenderDetails={eachName}
                updateCalenderName={updateCalenderName}
                isActive={calenderDayNameId === eachName.id}
              />
            ))}
          </ul>
          <div className="select-day-container">
            <p style={{ color: "#9e9e9e", fontSize: "10px", lineHeight:'0px' }}>SELECT DAY</p>
           <input type="date"  className="day-name" />
          </div>
        </div>
      </div>

      <Line
        data={{
          labels: ["jan", "feb", "march", "april", "may", "june"],

          datasets: [
            {
              label: "store 1",
              data: [40, 30, 45, 110, 10, 70],

              borderColor: "#1eb980",
              // backgroundColor: "blue",  /// we should keep to add a color to fill is true
              // fill: true,
              backgroundColor: "#1eb980",
              // fill: true,

              pointBackgroundColor: "green",
              pointBorderColor: "yellow",
              tension: 0.3, // curved line
            },
            // {
            //   label: "store 2",
            //   data: [40, 130, 45, 110, 200, 170],

            //   borderColor: "pink",
            //   // backgroundColor:"red",
            //   // fill: true,  // we should keep fill is true, otherwise background-color not applicable

            //   backgroundColor: "red",
            //   fill: true,
            //   pointBackgroundColor: "black",
            //   pointBorderColor: "red",
            //   tension: 0.3, // curved line
            // },
          ],
        }}
        height={500}
        width={500}
        options={{
          // maintainAspectRatio: false,
          // if we want horizontal bargraph , we should keep like this

          title: {
            display: true,
            text: "Line Chart",
          },
          // plugins: {
          //   tooltip: {
          //     enabled: false,
          //     callbacks: {
          //       title: function (t, d) {
          //         return "Tooltip";
          //       },
          //       label: function (t, d) {
          //         const label = d.datasets[t.datasetIndex].label;
          //         const value = d.datasets[t.datasetIndex].data[t.index];
          //         const sign = value >= 0 ? "+" : "";
          //         return `${label}: ${sign}${value.toFixed(2)}%`;
          //       },
          //     },
          //   },
          // legend:{
          //   display:true, // Legend is used to display labels at he top of a chart
          // }
          // },

          scales: {
            x: {
              // we should x axis and y axis like objects
              title: {
                display: true,
                text: "Months",
              },
            },

            y: {
              // we should x axis and y axis like objects
              title: {
                display: true,
                text: "Revenue",
              },
              // ticks: {
              //   min: 0,
              //   max: 700,
              //   stepSize: 100,
              // },
            },
          },
        }}
      ></Line>
    </div>
  );
}

export default LineChart;
