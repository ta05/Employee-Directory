import React from "react";

function ColumnHeader({header}) {
    return (
        <tr>
            <th scope="col">{header.id}</th>
            <th scope="col">{header.name}</th>
            <th scope="col">{header.role}</th>
            <th scope="col">{header.department}</th>
            <th scope="col">{header.salary}</th>
        </tr>
    );
}

export default ColumnHeader;