import React from "react";

import "./CalenderItem.css"

function CalenderItem(props) {
  const { calenderDetails, updateCalenderName , isActive} = props;
  const { id, text } = calenderDetails;

  const onClickCalenderName = () => {
    updateCalenderName(id);
  };

  const clickedClassName = isActive ? "active-button" : ""

  console.log(isActive)
  


  
  return (
    <li className="calender-button-item">
      <button type="button" className={`calender-button ${clickedClassName}`} onClick={onClickCalenderName}>
        {text}
      </button>
    </li>
  );
}

export default CalenderItem;
