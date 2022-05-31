import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Sidebar from "../../Sidebar";
import Header from "../../Header";
import "../../../Content/css/bootstrap.min.css";
import Breadcrumb from "../Header/Sub Header/Breadcrumb";
import "../Table/Table2.css";

class Table2 extends React.Component {
    // const[users, setUsers] = useState("");

    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI() {
        fetch("https://reqres.in/api/users?page=2").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                users: data.data
            })
        })
    }

    render() {

        let table_data = this.state.users.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>
                        <button className="btn btn-danger">Remove</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <div class="page-wrapper">
                    <Sidebar></Sidebar>
                    <div class="page-content">
                        <Header></Header>
                        <Breadcrumb></Breadcrumb>
                        <div className="main-container" style={{
                            "position": "relative",
                            "top": "50px"
                        }}>
                            <div className="container" style={{
                                height: "394px",
                                "overflow-x": "scroll", "margin-top": "0px"
                            }}>
                                <table className="table table-striped">
                                    <thead style={{
                                        position: "sticky", "top": 0,

                                        "background": "#fff"
                                    }}>
                                        <tr>
                                            <th>ID</th>
                                            <th>EMAIL</th>
                                            <th>FIRST NAME</th>
                                            <th>LAST NAME</th>
                                            <th>REMOVE</th>
                                        </tr>
                                    </thead>
                                    <tbody>{table_data}</tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="position-absolute top-center">
                                <button type="button" className="btn btn-primary">Click Here</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table2;