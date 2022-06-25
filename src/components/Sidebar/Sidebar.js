import { Link } from "react-router-dom";
import "./Sidebar.css";
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
      <span class="icon-menu-copy-26-1">hello</span>
      <Link to="/dashboard">
        <button type="button" className="menu-left-side-btn">
          <RiDashboardFill className="menu-icons" />
        </button>
      </Link>
      <Link to="/attendance">
        <button type="button" className="menu-left-side-btn">
          <FaCalendarDay className="menu-icons" />
        </button>
      </Link>

      <Link to="/allzones">
        <button type="button" className="menu-left-side-btn">
          <MdAddLocation className="menu-icons" />
        </button>
      </Link>
      <Link to="/cameras">
        <button type="button" className="menu-left-side-btn">
          <MdLocationOn className="menu-icons" />
        </button>
      </Link>
      <Link to="/virus">
        <button type="button" className="menu-left-side-btn">
          <RiVirusFill className="menu-icons" />
        </button>
      </Link>

      <Link to="/employees">
        <button type="button" className="menu-left-side-btn">
          <MdPeopleAlt className="menu-icons" />
        </button>
      </Link>

      <Link to="/roles">
        <button type="button" className="menu-left-side-btn">
          <IoMdBriefcase className="menu-icons" />
        </button>
      </Link>
    </div>
  );
};
export default Sidebar;
