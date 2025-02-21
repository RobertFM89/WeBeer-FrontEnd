import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el sidebar si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div className="sidebar-container">
      <button className="button" onClick={toggleSidebar}>
        {isOpen ? "Close Sidebar" : "Show Sidebar"}
      </button>
      <div
        className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
        ref={sidebarRef}
      >
        <ul>
          <li>
          <Link to="/createbeer" className="button">Create New Beer</Link>
          </li>
          <li>
            <Link to="/" className="button">Home</Link>
          </li>
          <li>
            <Link to="/history" className="button">Historia</Link>
          </li>
          <li>
            <Link to="/beers" className="button">Dashboard</Link>
          </li>
          <li>
            <Link to="/table" className="button">Periodic Table</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;