import React, { useState } from "react";


import CovidCareItem from "../CovidCareItem/CovidCareItem";

import "./Covid19.css"

function Covid19() {
  const covidCareList = [
    { id: "ALL", text: "ALL" },
    { id: "MASK", text: "MASK" },
    { id: "SOCIALDISTANCING", text: "SOCIALDISTANCING" },
  ];
  const [covidInstuctructionId, setCovidInstructionId] = useState(
    covidCareList[0]
  );

  const updateCovidCareItem = (activeCovidId) => {
    setCovidInstructionId(activeCovidId);
  };

  console.log(covidInstuctructionId);

  return (
    <div className="covid-19-app-container">
      <div className="covid-19-header">
        <div className="covid-19-first-container">
          <p className="covid-19-hader-text">Covid Compliance</p>
          <ul className="covid-19-list-container">
            {covidCareList.map((eachCare) => (
              <CovidCareItem
                key={eachCare.id}
                covidCareDetails={eachCare}
                updateCovidCareItem={updateCovidCareItem} isActive= {covidInstuctructionId === eachCare.id}
              />
            ))}
          </ul>
        </div>
        <div className="covid-19-second-container">
            <div className="covid-19-date">
                <label className="covid-19-header-label">DATE</label>
                <input type="date" className="inpute-covid-date" />

            </div> 

            <div className="covid-19-date">
                <label>FROM</label>
                <input type="time" className="inpute-covid-date" />

            </div> 



            <div className="covid-19-date">
                <label>TO</label>
                <input type="time" className="inpute-covid-date" />

            </div> 
            <button type="button" className="download-button" >Download</button>


        </div>
      </div>
    </div>
  );
}

export default Covid19;
