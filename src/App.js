import './App.css';
import { useState } from 'react';

function Square({ value, onClick }) {
  return (
    <div className="squareButton" onClick={onClick}>X{value}</div>
  )
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(squares);

  function getStatus() {
    if (winner) {
      return "Winner: " + winner;
    }
    else if (isBoardFull(squares)) {
      return "Draw!"
    }
    else {
      return "Current Player: " + (isXNext ? 'X' : 'O');
    }
  }

  function renderSquare(index) {
    return (
      <Square
        value={squares[index]}
        onClick={() => {

          // checks to see if the value of square is not empty or if a winner has not been decided
          // prevents double clicking
          if (squares[index] != null || winner != null) {
            return;
          }

          const nextSquares = squares.slice();
          // determine whether the square will render X or O based off a boolean value stored in state
          nextSquares[index] = (isXNext ? 'X' : 'O');

          setSquares(nextSquares);
          // toggle the turn for the player by updating state
          setIsXNext(!isXNext);
        }}
      />
    );
  }


  // renderRestart Func will simply display the button, the handler function is in the return statement
  function renderRestartButton() {
    return (
      <Restart
        value={winner ? 'Play Again ?' : 'Reset'}
        onClick={() => {
          // sets all square values back to null
          setSquares(Array(9).fill(null));
          // changes player 1 back to X
          setIsXNext(true);
        }}
      />
    )
  }

  return (
    <div className="container">
      <h1 className="heading">Tic Tac Toe </h1>
      <div className="gameContainer">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="controlRow">
        <div className="col">
          {getStatus()}
        </div>
        <div className="col">
          {renderRestartButton()}
        </div>
      </div>
    </div>
  )
}

function Restart({ onClick, value }) {
  return (
    <button className="resetButton" onClick={onClick}>{value}</button>
  )
}

function calculateWinner(squares) {
  // checks all the possible lines in this game that could result in a win
  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
}


function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}






