import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Employee extends Component {
  state = {
    emp: [],
  };

  requestEmp = async () => {
    const response = await axios.get(
      `http://dummy.restapiexample.com/api/v1/employees `
    );
    this.setState({ emp: response.data.data });
    console.log(response.data.data);
  };

  componentDidMount() {
    this.requestEmp();
  }
  render() {
    const { emp } = this.state;
    if (!this.state.emp) return "Loading...";
    return (
      <div>
        <h3 className="text-warning">Employee Detailes</h3>
        <Table striped bordered hover className="my-3">
          <thead>
            <tr>
              <th>emp_Id</th>
              <th>emp_Name</th>
              <th>emp_Age</th>
              <th>emp_Salary</th>
            </tr>
          </thead>

          <tbody>
            {emp.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.employee_name}</td>
                <td>{emp.employee_age}</td>
                <td>{emp.employee_salary}</td>
                <td>
                  {" "}
                  <Link to={`/emp/${emp.id}`}>
                    <Button className="btn btn-success">employee</Button>{" "}
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
