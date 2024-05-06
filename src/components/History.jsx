import React from "react";
import "../css/History.css";

const History = ({ history, setCurrentMove }) => {
    const jumpTo = (nextMove) => { // прыжок к конкретной ситуации на игровом поле
        setCurrentMove(nextMove);
    }

    return ( // список кнопок для перехода к конкретным ситуациям
        <ul className="list">
            {history.map((squares, move) => {
                let description;
        
                if (move > 0) {
                    description = 'Перейти к шагу #' + move;
                } else {
                    description = 'Перейти к началу игры';
                }
        
                return (
                    <li key={move} className="list-item">
                        <button className="list-item__button" onClick={() => jumpTo(move)}>{description}</button>
                    </li>
                );
            })}
        </ul>
    )
}

export default History;