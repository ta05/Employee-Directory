import React from "react";
import Button from "../Button";

function Form({handleClick, children}) {
    let name = "";
    let department = "";

    const handleInputChange = event => {
        
    }
    return (
        <div>
            <form className="form">
                <input
                    
                />
                <Button handleClick={handleClick}>Filter</Button>
            </form>
        </div>
    )
}

export default Form;