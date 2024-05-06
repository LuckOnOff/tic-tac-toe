import React, { useState } from "react";
import Board from "./Board";
import History from "./History";
import "../css/Game.css";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]); // история ходов
    const [currentMove, setCurrentMove] = useState(0); // какой шаг просматривается сейчас
    const xIsNext = currentMove % 2 === 0; // определяет, чей следующий ход: если текущий ход делится на 2 без остатка, то ходит игрок X
    const currentSquares = history[currentMove]; // получает текущее состояние игрового поля из истории ходов

    const handlePlay = (nextSquares) => { // обновляет историю ходов и текущий ход при каждом ходе игрока
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

  return (
    <section className="game">
        <section className="game-board">
            <Board 
                xIsNext={xIsNext} 
                squares={currentSquares}
                onPlay={handlePlay}
            />
        </section>
        <section className="game-info">
          <History history = {history} setCurrentMove = {setCurrentMove}/>
        </section>
    </section>
  )

}

export default Game;