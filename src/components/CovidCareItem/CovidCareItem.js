import React from "react";


import "./CovidCareItem.css"

function CovidCareItem(props) {
  const { covidCareDetails, updateCovidCareItem, isActive } = props;
  const { id, text } = covidCareDetails;

  const onClickCovidItem = () => {
    updateCovidCareItem(id);
  };

  const buttonClassNames = isActive ? "active-covid-button" : ""

  

  return (
    <li className="covid-care-list-item">
      <button
        type="button"
        className={`covid-care-button-item ${buttonClassNames}`}
        onClick={onClickCovidItem}
      >
        {text}
      </button>
    </li>
  );
}

export default CovidCareItem;
