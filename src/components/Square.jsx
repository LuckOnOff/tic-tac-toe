import React from "react";
import "../css/Square.css";

// отображает квадратики сетки
const Square = ({ value, onSquareClick }) => {

  return (
    <button className="square" onClick={onSquareClick}>
        {value}
    </button>
  )

}

export default Square;