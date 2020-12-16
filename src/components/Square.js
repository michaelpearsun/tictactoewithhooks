import React from "react";

const Square = ({value, onClick}) => {
    const style = value ? `squares ${value}` : `squares`;

    return (
        <button 
            className="style" 
            onClick={onClick}
           // className={props.squareClassName}    
        >
            {value}
        </button>
    )
}

export default Square;