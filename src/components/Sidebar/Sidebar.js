import { Link } from "react-router-dom";
import "./Sidebar.css"
import { RiDashboardFill } from "react-icons/ri";
import { FaCalendarDay } from "react-icons/fa";
import { MdAddLocation, MdPeopleAlt } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { RiVirusFill } from "react-icons/ri";
import { IoMdBriefcase } from "react-icons/io";



// import icons from "./components/icons/icons.css"


const Sidebar = () => {
  // console.log(props)
  return (
    <div className="sidebar-container">
      <span class = "icon-menu-copy-26-1">hello</span>
      <Link to="/dashboard">
        <RiDashboardFill className="menu-icons" />
      </Link>
      <Link to="/attendance">
        <FaCalendarDay className="menu-icons" />
      </Link>
      <Link to="/allzones">
        <MdAddLocation className="menu-icons" /> 
      </Link>
      <Link to="/cameras">
      <MdLocationOn className="menu-icons" />
       
      </Link>
      
      <RiVirusFill className="menu-icons" />
      <Link to="/employees">
        <MdPeopleAlt className="menu-icons" />
      </Link>
      <Link to ="/roles">
      <IoMdBriefcase className="menu-icons" />

      </Link>
      
    </div>
  );
};
export default Sidebar;