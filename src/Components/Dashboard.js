import { React, useEffect, useLayoutEffect } from "react";
import Card1 from "./Dashboard/Card1";
import Card2 from "./Dashboard/Card2";
import Card3 from "./Dashboard/Card3";
import Card5 from "./Dashboard/Card5";
import Card6 from "./Dashboard/Card6";
import Card7 from "./Dashboard/Card7";
import "../Content/css/bootstrap.min.css";
import "../Content/fonts/style.css";
import "../Content/css/main.css";
import "../Content/vendor/daterange/daterange.css";
import { Navigate } from 'react-router-dom';
import { getCookie } from "./Cookie";

function Dashboard(props) {
    // useLayoutEffect(() => {
    //     if (!getCookie('user')) {
    //         return <Navigate to="/login" replace />;
    //     }
    // }, [])

    useEffect(() => {
        props.setCrumbs(['Home', 'dashboard',])
        return () => {
            console.log('bread crumb set successfully')
        }
    }, [props.setCrumbs])

    // if (!getCookie('user')) {
    //     return window.location.href = "/";
    // }

    return (
        <div>
            <div className="row gutters">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <Card1></Card1>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <Card2></Card2>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                    <Card3></Card3>
                </div>
            </div>
            <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">Overall Income</div>
                        </div>
                        <div className="card-body pt-0 pb-0">
                            <div id="income"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gutters">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                    <Card5></Card5>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                    <Card6></Card6>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                    <Card7></Card7>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;

