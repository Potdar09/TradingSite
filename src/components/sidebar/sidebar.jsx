import React from 'react'
import Style from './module.sidebar.css'
import { RiStockLine, RiHome3Line, } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { PiGraph } from "react-icons/pi";
const sidebar = () => {
  return (
    <div className="sidebar ">
     <RiHome3Line className="sidebarIcon" />
     <RiStockLine className="sidebarIcon" />
     <GoGraph className="sidebarIcon" />
     <PiGraph className="sidebarIcon" />
   
    </div>
  )
}

export default sidebar