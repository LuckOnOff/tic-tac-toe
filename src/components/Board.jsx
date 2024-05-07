import React from "react";
import Square from "./Square.jsx";
import "../css/Board.css";

// сетка
const Board = ({ xIsNext, squares, onPlay }) => {
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ] // все возможные линии сетки в мономерном массиве

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]; // возвращает X или O
            } // ищет выигрышные комбинации в игровом поле
        }

        if (squares.every(square => square)) {
            return 'Ничья';
        } // проверка на ничью

        return null; // если еще нет победителя или не ничья
    }

    const handleClick = (i) => {
        const nextSquares = squares.slice(); // копируем массив, сохраняя оригинальный

        if(squares[i] || calculateWinner(squares)) {
            return;
        } // если клетка уже занята или победитель уже есть, то заблокировать дальнейшие действия с клетками

        if(xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares); // изменение статуса игры
    let status;

    if (winner === 'Ничья') {
        status = winner;
    } else if(winner) {
        status = 'Победитель: ' + winner
    } else {
        status = "Следующий ход: " + (xIsNext ? "X" : "O");
    }

  return ( // отрисовка матрицы 3х3 через 2 цикла
    <>
        <h1 className="board-status">{status}</h1>
        {/* формула для преобразования двумерных координат в одномерный индекс в случае матрицы 3x3:
            индекс = номер строки * количество столбцов + номер столбца */}
        {[...Array(3).keys()].map(row => (
            <section key={row} className="board-row">
                {[...Array(3).keys()].map(col => (
                    <Square
                        key={row * 3 + col}
                        attribute={row * 3 + col}
                        value={squares[row * 3 + col]}
                        onSquareClick={() => handleClick(row * 3 + col)}
                    />
                ))}
            </section>
        ))}
    </>
  )

}

export default Board;