import React from "react";

function Card1() {
    return (
        <div>
            <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Customers</div>
                                    </div>
                                    <div className="card-body">
                                        <div id="customers"></div>
                                        {/* <!-- Row starts --> */}
                                        <div className="row gutters">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                                <div className="info-stats3 shade-one-a">
                                                    <i className="icon-opacity"></i>
                                                    <h6>New</h6>
                                                    <h3>450</h3>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                                <div className="info-stats3 shade-one-b">
                                                    <i className="icon-opacity"></i>
                                                    <h6>Returned</h6>
                                                    <h3>900</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Row end --> */}
                                    </div>
                                </div>
        </div>
    )
};

export default Card1;