import React, { useState } from "react";
import "../Table/Table1.css";
import Sidebar from "../../Sidebar";
import Header from "../../Header";
import "../../../Content/css/bootstrap.min.css";
import Breadcrumb from "../Header/Sub Header/Breadcrumb";
import { Modal, Button, Form } from "react-bootstrap";

 
function Table() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = (e) => {
    e.preventDefault();
    handleClose();
  }
  return (
    <div className="tab-content" id="nav-tabContent">
    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <table className="table" cellspacing="0">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Employer</th>
            <th>Awards</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="#">Work 1</a></td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 2</a></td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 3</a></td>
            <td>Coe</td>
            <td>hary@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 4</a></td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 5</a></td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 6</a></td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 7</a></td>
            <td>Coe</td>
            <td>hary@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 8</a></td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 9</a></td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 10</a></td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 11</a></td>
            <td>Coe</td>
            <td>hary@example.com</td>
          </tr>
          <tr>
            <td><a href="#">Work 12</a></td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Table;

// https://reqres.in/api/users?page=2

// 