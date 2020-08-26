import React, {Component} from 'react';
// import { ColumnHeader, Table, TableBody, TableHead, TableRow, Title, Wrapper } from "./components";
import Button from "./components/Button";
import ColumnHeader from "./components/ColumnHeader";
import Form from "./components/Form";
import Table from "./components/Table";
import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";
import TableRow from "./components/TableRow";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import './App.css';

class App extends Component {

  state = {
    employees,
    header: {
      id: "ID",
      name: "Name",
      role: "Role",
      department: "Department",
      salary: "Salary"
    },
    order: 1
  };

  handleInputChange = event => {
    this.setState({
      employees: employees,
      header: this.state.header,
      order: this.state.order
    });

    console.log(this.state.employees);

    let department = event.target.value;
    this.filterTable(department);
  }

  filterTable = (department) => {

    this.setState({
      header: this.state.header,
      employees: this.state.employees.filter(employee => employee.department.toLowerCase().includes(department.trim().toLowerCase())),
      order: this.state.order
    });
  }

  sortTable = event => {
    event.preventDefault();
    
    const order = this.state.order;
    this.setState({
      header: this.state.header,
      employees: this.state.employees.sort(function (a, b) {
        return (order < 0 ? b.salary - a.salary : a.salary - b.salary);
      }),
      order: -1 * this.state.order
    });
    
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee Table</Title>
        <Table>
          <TableHead>
            <ColumnHeader header={this.state.header}/>
          </TableHead>

          <TableBody>
            {this.state.employees.map(employee => (
              <TableRow
                key={employee.id}
                employee={employee}
              />
            ))}
          </TableBody>
        </Table>
        <Form handleInputChange={this.handleInputChange}/>
        <Button handleClick={this.sortTable}>SORT</Button>
      </Wrapper>
    );
  }
}

export default App;
