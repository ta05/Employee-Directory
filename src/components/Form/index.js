import React, {useState} from "react";

function Form(props) {
    return (
        <div>
            <form className="form">
                <input
                    value={props.value}
                    name="department"
                    className="form-control"
                    placeholder="Enter a department to filter by"
                    onChange={props.handleInputChange}
                />
            </form>
        </div>
    )
}

export default Form;