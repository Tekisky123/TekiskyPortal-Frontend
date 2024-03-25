import { Link, NavLink, useLocation } from "react-router-dom";
import "../Assets/Styles/Sidebar.css";
import { useEffect, useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaAddressCard, FaBookOpen } from "react-icons/fa";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";

function Sidebar() {
  const [activeTab, setActiveTab] = useState(null);
  const [isChecked, setIsChecked] = useState(true); // State to track checkbox status
  const location = useLocation();

  useEffect(() => {
    const activeTabFromStorage = localStorage.getItem("activeTab");
    if (activeTabFromStorage) {
      setActiveTab(parseInt(activeTabFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox status
  };

  useEffect(() => {
    // Set active tab based on current path
    const pathToTabMap = {
      "/dashboard": 1,
      "/students": 2,
      "/another-route": 3,
      "/student-form": 4,
      "/scan": 5,
      "/ho": 6,
    };
    setActiveTab(pathToTabMap[location.pathname]);
  }, [location.pathname]);

  return (
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <div id="nav-header">
        <Link id="nav-title" href="">
          Tekisky
        </Link>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <NavLink to="/dashboard" activeClassName="active">
          <div
            className={`nav-button ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            {" "}
            <IoHomeSharp className="icon" />{isChecked ? '' : 'Dashboard'}
          </div>
        </NavLink>
        <NavLink to="/students" activeClassName="active">
          <div
            className={`nav-button ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            <BsFillPeopleFill className="icon" />{isChecked ? '' : 'Students'}
          </div>
        </NavLink>
        <NavLink to="/another-route" activeClassName="active">
          <div
            className={`nav-button ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            <FaBookOpen className="icon" />{isChecked ? '' : 'Courses'}
          </div>
        </NavLink>
        <NavLink to="/student-form" activeClassName="active">
          <div
            className={`nav-button ${activeTab === 4 ? "active" : ""}`}
            onClick={() => handleTabClick(4)}
          >
            <FaAddressCard className="icon" />{isChecked ? '' : 'Student Form'}
          </div>
        </NavLink>

        <NavLink to="/scan" activeClassName="active">
          <div
            className={`nav-button ${activeTab === 5 ? "active" : ""}`}
            onClick={() => handleTabClick(5)}
          >
            <MdOutlineQrCodeScanner className="icon" />{isChecked ? '' : 'Scan'}
          </div>
        </NavLink>
        <NavLink to="/ho" activeClassName="active">
          <div
            className={`nav-button ${activeTab === 6 ? "active" : ""}`}
            onClick={() => handleTabClick(6)}
          >
            <LuLogIn className="icon" />{isChecked ? '' : 'Login'}
          </div>
        </NavLink>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img
              src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"
              alt=""
            />
          </div>
          <div id="nav-footer-titlebox">
            <Link id="nav-footer-title">Tekisky</Link>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up"></i>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
