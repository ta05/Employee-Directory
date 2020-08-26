import React from "react";

function TableRow({employee}) {
    return (
        <tr>
            <th scope="row">{employee.id}</th>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
            <td>{employee.department}</td>
            <td>{employee.salary}</td>
        </tr>
    );
}

export default TableRow;