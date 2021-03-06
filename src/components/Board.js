import React from "react";
import Square from "./Square";
import { calculateWinner } from '../helper';

const Board = ({ squares, onClick }) => (
    <div className="board">
        {squares.map((square, i) => (
            <Square 
                key={i} 
                value={square} 
                onClick={() => onClick(i)} 
                //squareClassName={squareClassName}
            />
        ))}
    </div>
);


export default Board;