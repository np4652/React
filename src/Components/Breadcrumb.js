import React from "react";

const breadcrumb = {
  backgroundColor: "white",
  border: "1px solid rgba(0, 0, 0, 0.125)",
  borderRadius: "0.37rem",
};

function PageHeader(props) {
  return (
    <div>
      <div className="page-header">
        <ol className="breadcrumb">
          {props.crumbs?.map((crumb, index) => {
            return (
              <li className="breadcrumb-item" key={index}>
                {crumb}
              </li>
            );
          })}
          {/* <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active">Dashboard</li> */}
        </ol>

        <ul className="app-actions">
          <li>
            <a href="#" id="reportrange">
              <span className="range-text"></span>
              <i className="icon-chevron-down"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-export"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PageHeader;
