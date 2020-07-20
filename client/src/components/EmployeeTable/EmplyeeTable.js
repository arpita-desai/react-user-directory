import React, { Component } from "react";
import "./style.css";

class EmployeeTable extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        {
          id: 101,
          fname: "Harry",
          lname: "Peter",
          Position: "Intern"
        },
        {
          id: 102,
          fname: "Tom",
          lname: "Suh",
          Position: "Engineer"
        },
        {
          id: 103,
          fname: "Lilly",
          lname: "Zamora",
          Position: "Marketing Manager"
        },
        {
          id: 104,
          fname: "Ronny",
          lname: "Trent",
          Position: "Sales Executive"
        },
        {
          id: 105,
          fname: "Tina",
          lname: "Roy",
          Position: "Developer"
        },
        {
          id: 106,
          fname: "Dean",
          lname: "Willson",
          Position: "Developer"
        }
      ]
    };
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, fname, lname, Position } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{fname}</td>
          <td>{lname}</td>
          <td>{Position}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Employee Table</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
