import React, { useState } from "react";
import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";
import Calendar from "react-calendar";

import "./Attendance.css";

function Attendance() {
  const [value, setValue] = useState(new Date());
  const monthsList = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [monthId, setMonthId] = useState(monthsList[0]);
  const datesList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const yearsList = [2017, 2018, 2019, 2020, 2021, 2022];

  const onChangeMonth = (e) => {
    setMonthId(e.target.value);
  };

  const onChange = (value) => {
    setValue(value);
  };
  return (
    <div className="attendance-bg-container">
      <div className="attendance-container">
        <h4 className="heading">Attendence</h4>
        <div className="right-container">
          <div className="attendance-name">
            <p style={{ fontSize: "10px", color: "white", lineHeight: "0em" }}>
              MONTH
            </p>
            <select
              value={monthId}
              onChange={onChangeMonth}
              style={{
                backgroundColor: "rgb(49, 49, 51)",
                fontSize: "10px",
                color: "white",
                border: "none",
              }}
            >
              {monthsList.map((each) => (
                <option key={each}>{each}</option>
              ))}
            </select>
          </div>
          <div className="attendance-name">
            <p style={{ fontSize: "10px", color: "white", lineHeight: "0em" }}>
              Year
            </p>
            <select
              value={monthId}
              onChange={onChangeMonth}
              style={{
                backgroundColor: "rgb(49, 49, 51)",
                fontSize: "10px",
                color: "white",
                border: "none",
              }}
            >
              {yearsList.map((each) => (
                <option key={each}>{each}</option>
              ))}
            </select>
          </div>
          <Popup
            className="popup-content"
            model
            trigger={
              <button type="button" className="download-btn">
                Download
              </button>
            }
          >
            {(close) => (
              <>
                <div className="close-container">
                  <p style={{ color: "white" }}>Naveen Challa</p>
                  <button
                    type="button"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                    }}
                    onClick={() => close()}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
                <div>
                  <Calendar onChange={onChange} value={value} />
                </div>
              </>
            )}
          </Popup>
          
        </div>
      </div>
      <div className="attendance-icons">
            <div className="mark-container">
              <span class="icon-menu-copy-24"></span>
              <label className="attendence-label">Absence</label>
            </div>
            <div className="mark-container">
              <span class="icon-menu-copy-25"></span>
              <label className="attendence-label">Present</label>
            </div>
            <div className="mark-container">
              <span class="icon-menu-copy-26-1"></span>
              <labl className="attendence-label">Report</labl>
            </div>
          </div>

      <div className="table-container">
        <table className="attendance-table">
          <tr className="attendance-table">
            <th className="each-date">Employee Name</th>
            {datesList.map((eachDate) => (
              <th className="each-date">{eachDate}</th>
            ))}
          </tr>
          <tr className="attendance-table">
            <th className="each-date">Naveen Challa</th>
            {datesList.map((eachDate) => (
              <th  className="each-date">-</th>
            ))}
          </tr>
          <tr className="attendance-table">
            <th className="each-date">Shiva Shankar</th>
            {datesList.map((eachDate) => (
              <th  className="each-date">-</th>
            ))}
          </tr>
          <tr className="attendance-table">
            <th className="each-date">Bharath</th>
            {datesList.map((eachDate) => (
              <th  className="each-date">-</th>
            ))}
          </tr>
          <tr className="attendance-table">
            <th className="each-date">Santhosh</th>
            {datesList.map((eachDate) => (
              <th  className="each-date">-</th>
            ))}
          </tr>
          <tr className="attendance-table">
            <th className="each-date">Prasad</th>
            {datesList.map((eachDate) => (
              <th  className="each-date">-</th>
            ))}
          </tr>
          <tr className="attendance-table">
            <th  className="each-date" >Shankar</th>
            {datesList.map((eachDate) => (
              <th  className="each-date">-</th>
            ))}
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
