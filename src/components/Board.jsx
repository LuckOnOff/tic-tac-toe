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

            if (squares.every(square => square)) {
                return 'Ничья';
            } // проверка на ничью
        }

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

  return ( // сетка из 3 линий по 3 квадрата каждая
    <>
        <h1 className="board-status">{status}</h1>
        <section className="board-row">
            <Square 
                value = {squares[0]} 
                onSquareClick = {() => handleClick(0)}
            />
            <Square 
                value = {squares[1]} 
                onSquareClick = {() => handleClick(1)}
            />
            <Square 
                value = {squares[2]} 
                onSquareClick = {() => handleClick(2)}
            />
        </section>
        <section className="board-row">
            <Square 
                value = {squares[3]} 
                onSquareClick = {() => handleClick(3)}
            />
            <Square 
                value = {squares[4]} 
                onSquareClick = {() => handleClick(4)}
            />
            <Square 
                value = {squares[5]} 
                onSquareClick = {() => handleClick(5)}
            />
        </section>
        <section className="board-row">
            <Square 
                value = {squares[6]} 
                onSquareClick = {() => handleClick(6)}
            />
            <Square 
                value = {squares[7]} 
                onSquareClick = {() => handleClick(7)}
            />
            <Square 
                value = {squares[8]} 
                onSquareClick = {() => handleClick(8)}
            />
        </section>
    </>
  )

}

export default Board;