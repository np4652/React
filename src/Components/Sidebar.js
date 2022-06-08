import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Content/img/mylogo2.png";

function Sidebar() {
    const [activeMenuName, setActiveMenuName] = useState('');
    const activeMenuHandler = (menuName) => {
        setActiveMenuName(menuName);
    };
    return (
        <>
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="index.html" className="logo">
                        <img src={logo} alt="Admin Dashboard" />
                    </a>
                </div>
                <div className="sidebar-content">
                    <div className="sidebar-menu">
                        <ul>
                            <li className="header-menu">General</li>
                            <li>
                                <Link to="/dashboard">
                                    <i className="icon-devices_other"></i>
                                    <span className="menu-text">Dashboards</span>
                                </Link>
                            </li>
                            <li className={`sidebar-dropdown ${activeMenuName == 'MASTER' ? "active" : ""}`} onClick={() => activeMenuHandler('MASTER')}>
                                <a href="#">
                                    <i className="icon-calendar1"></i>
                                    <span className="menu-text">MASTER</span>
                                </a>
                                <div className="sidebar-submenu" style={{ display: "block!important" }}>
                                    <ul>
                                        <li>
                                            <Link to="/banner">
                                                <span className="menu-text">Banner</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/testapi">
                                                <span className="menu-text">TestAPI</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="calendar-external-draggable.html">News</a>
                                        </li>
                                        <li>
                                            <a href="calendar-google.html">Category</a>
                                        </li>
                                        <li>
                                            <a href="calendar-list-view.html">Product</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={`sidebar-dropdown ${activeMenuName == 'USER' ? "active" : ""}`} onClick={() => activeMenuHandler('USER')}>
                                <a href="#">
                                    <i className="icon-calendar1"></i>
                                    <span className="menu-text">USER</span>
                                </a>
                                <div className="sidebar-submenu">
                                    <ul>
                                        <li>
                                            <a href="calendar.html">Consumer Detail</a>
                                        </li>
                                        <li>
                                            <a href="calendar-external-draggable.html">FOS Detail</a>
                                        </li>
                                        <li>
                                            <a href="calendar-google.html">FOS Mapping</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Sidebar;