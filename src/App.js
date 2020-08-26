import React, {Component} from 'react';
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow, Title, Wrapper } from "./components";
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
            <TableRow employee={this.state.header}/>
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
