import React, {Component} from 'react';
// import { ColumnHeader, Table, TableBody, TableHead, TableRow, Title, Wrapper } from "./components";
import ColumnHeader from "./components/ColumnHeader";
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
    }
  };

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
      </Wrapper>
    );
  }
}

export default App;
