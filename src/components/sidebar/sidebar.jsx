"use client";

import React, { useState } from 'react';
import Style from './module.sidebar.css';
import { RiStockLine, RiHome3Line } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { PiGraph } from "react-icons/pi";
import { MdMenu, MdClose } from "react-icons/md"; 
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <MdClose /> : <MdMenu />} 
      </div>
      <div className="menuItems">
        <div className="menuItem">
          <RiHome3Line className="sidebarIcon" />
          {isOpen && <span className="menuText">Dashboard</span>}
        </div>
        <div className="menuItem">
          <RiStockLine className="sidebarIcon" />
          {isOpen && <span className="menuText">Stocks</span>}
        </div>
        <div className="menuItem">
          <GoGraph className="sidebarIcon" />
          {isOpen && <span className="menuText">Graphs</span>}
        </div>
        <div className="menuItem">
          <PiGraph className="sidebarIcon" />
          {isOpen && <span className="menuText">Reports</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
