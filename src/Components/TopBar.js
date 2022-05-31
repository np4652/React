import React from "react";
import user13 from "../Content/img/user21.png";
import user10 from "../Content/img/user10.png";
import user6 from "../Content/img/user6.png";
import user24 from "../Content/img/user13.png";

export default function TopBar() {
    return (
            <header className="header">
                <div className="toggle-btns">
                    <a id="toggle-sidebar" href="#">
                        <i className="icon-list"></i>
                    </a>
                    <a id="pin-sidebar" href="#">
                        <i className="icon-list"></i>
                    </a>
                </div>
                <div className="header-items">
                    {/* <!-- Custom search start --> */}
                    <div className="custom-search">
                        <input type="text" className="search-query" placeholder="Search here ."></input>
                        <i className="icon-search1"></i>
                    </div>
                    {/* <!-- Custom search end --> */}

                    {/* <!-- Header actions start --> */}
                    <ul className="header-actions">
                        <li className="dropdown">
                            <a href="#" id="notifications" data-toggle="dropdown" aria-haspopup="true">
                                <i className="icon-box"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right lrg" aria-labelledby="notifications">
                                <div className="dropdown-menu-header">
                                    Tasks (05)
                                </div>
                                <ul className="header-tasks">
                                    <li>
                                        <p>#20 - Dashboard UI<span>90%</span></p>
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                                <span className="sr-only">90% Complete (success)</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <p>#35 - Alignment Fix<span>60%</span></p>
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                                <span className="sr-only">60% Complete (success)</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <p>#50 - Broken Button<span>40%</span></p>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                                <span className="sr-only">40% Complete (success)</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="#" id="notifications" data-toggle="dropdown" aria-haspopup="true">
                                <i className="icon-bell"></i>
                                <span className="count-label">8</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right lrg" aria-labelledby="notifications">
                                <div className="dropdown-menu-header">
                                    Notifications (40)
                                </div>
                                <ul className="header-notifications">
                                    <li>
                                        <a href="#">
                                            <div className="user-img away">
                                                <img src={user13} alt="User" />
                                            </div>
                                            <div className="details">
                                                <div className="user-title">Abbott</div>
                                                <div className="noti-details">Membership has been ended.</div>
                                                <div className="noti-date">Oct 20, 07:30 pm</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="user-img busy">
                                                <img src={user10} alt="User" />
                                            </div>
                                            <div className="details">
                                                <div className="user-title">Braxten</div>
                                                <div className="noti-details">Approved new design.</div>
                                                <div className="noti-date">Oct 10, 12:00 am</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="user-img online">
                                                <img src={user6} alt="User" />
                                            </div>
                                            <div className="details">
                                                <div className="user-title">Larkyn</div>
                                                <div className="noti-details">Check out every table in detail.</div>
                                                <div className="noti-date">Oct 15, 04:00 pm</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="#" id="userSettings" className="user-settings" data-toggle="dropdown" aria-haspopup="true">
                                <span className="user-name">Nikhil Chauhan</span>
                                <span className="avatar">
                                    <img src={user24} alt="avatar" />
                                    <span className="status busy"></span>
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userSettings">
                                <div className="header-profile-actions">
                                    <div className="header-user-profile">
                                        <div className="header-user">
                                            <img src={user24} alt="Admin_Template" />
                                        </div>
                                        <h5>Nikhil Chauhan</h5>
                                        <p>Admin</p>
                                    </div>
                                    <a href="user-profile.html"><i className="icon-user1"></i> My Profile</a>
                                    <a href="account-settings.html"><i className="icon-settings1"></i> Account Settings</a>
                                    <a href="login.html"><i className="icon-log-out1"></i> Sign Out</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* <!-- Header actions end --> */}
                </div>
            </header>
    )
};