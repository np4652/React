import React from "react";

class Table2 extends React.Component {

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
            <div className="container" style={{
                height: "394px",
                "overflow-x": "scroll"
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
        )
    }
}

export default Table2;