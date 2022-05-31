import React from "react";

function Card7() {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="card-title">Order History</div>
                </div>
                <div className="card-body">
                    <div className="customScroll5">
                        <ul className="user-messages">
                            <li className="clearfix">
                                <div className="customer">AM</div>
                                <div className="delivery-details">
                                    <span className="badge badge-primary">Ordered</span>
                                    <h5>Aaleyah Malik</h5>
                                    <p>We are pleased to inform that the following ticket no. <b>Le Rouge510</b> have been booked.</p>
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="customer">AS</div>
                                <div className="delivery-details">
                                    <span className="badge badge-primary">Delivered</span>
                                    <h5>Ali Sayed</h5>
                                    <p>The carrier successfully delivered the message to the end user.</p>
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="customer">ZR</div>
                                <div className="delivery-details">
                                    <span className="badge badge-primary">Cancelled</span>
                                    <h5>Zaira Raheem</h5>
                                    <p>The following describe the status codes and messages states for delivery receipts.</p>
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="customer">LJ</div>
                                <div className="delivery-details">
                                    <span className="badge badge-primary">Returned</span>
                                    <h5>Lily Jordan</h5>
                                    <p>Status codes and descriptions are returned in the following OpenMarket-specific TLVs When a delivery receipt is received.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card7;