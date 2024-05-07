import React from "react";
import "../css/History.css";

const History = ({ history, currentMove, setCurrentMove }) => {
    // создаем массив с описаниями для каждого шага
    const descriptions = history.map((squares, move) => {
        if (move > 0) {
            return 'Перейти к шагу #' + move;
        } else {
            return 'Перейти к началу игры';
        }
    });

    // создаем объект с описаниями для текущего шага
    const currentDescription = 'Вы находитесь на шаге #' + currentMove;

    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove);
    }

    return (
        <ul className="list">
            {/* используем метод map для создания списка кнопок */}
            {history.map((squares, move) => (
                <li key={move} className="list-item">
                    {/* Иипользуем тернарный оператор для выбора текста кнопки */}
                    {currentMove === move ? (
                        <span className="list-item__text" onClick={() => jumpTo(move)}>
                            {currentDescription}
                        </span>
                    ) : (
                        <button className="list-item__button" onClick={() => jumpTo(move)}>
                            {descriptions[move]}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default History;