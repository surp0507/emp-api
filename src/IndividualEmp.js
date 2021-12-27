import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";

export const IndividualEmp = () => {
  const [indemp, setIndEmp] = useState([]);
  const { id } = useParams();
  const requestData = async () => {
    const response = await axios.get(
      `http://dummy.restapiexample.com/api/v1/employee/${id}`
    );
    console.log(response.data.data);
    setIndEmp([response.data.data]);
  };

  useEffect(() => {
    requestData();
  }, [indemp]);

  if (!indemp) return "Loading...";
  return (
    <div>
      <h3 className="text-warning ">Individual Employee</h3>
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
          {indemp.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.employee_name}</td>
              <td>{emp.employee_age}</td>
              <td>{emp.employee_salary}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
