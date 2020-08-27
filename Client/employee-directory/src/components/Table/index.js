import React from "react";

function Table(props) {
    const style = {
        backgroundColor: "rgba(0,0,0,0)",
        fontFamily: "'Press Start 2P', cursive"
    };

    return <table className="table table-dark" style={style}>{props.children}</table>;
}

export default Table;