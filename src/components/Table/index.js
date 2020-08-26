import React from "react";

function Table(props) {
    return <table className="table table-dark">{props.children}</table>;
}

export default Table;