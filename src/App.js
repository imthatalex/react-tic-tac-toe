import './App.css';
import {useState} from 'react';

export default function App() {
  const [isPlayerX, setIsPlayerX] = useState('');

  return (
    <Game 
      currentPlayer={isPlayerX}
      nextPlayer={setIsPlayerX}
    />
  )
}

function Game({currentPlayer, nextPlayer}){
  return(
    <div className='container'>
      <div className="row">
        <Square 
          currentPlayer={currentPlayer}
          nextPlayer={nextPlayer}
        />
        <Square 
          currentPlayer={currentPlayer}
          nextPlayer={nextPlayer}
        />
        <Square 
          currentPlayer={currentPlayer}
          nextPlayer={nextPlayer}
        />
      </div>
      <div className="row">
      <Square 
          currentPlayer={currentPlayer}
          nextPlayer={nextPlayer}
        />
        <Square 
          currentPlayer={currentPlayer}
          nextPlayer={nextPlayer}
        />
        <Square 
          currentPlayer={currentPlayer}
          nextPlayer={nextPlayer}
        />
      </div>
      <div className="row">
      <Square 
          currentPlayer={currentPlayer}
          nextPlayer={nextPlayer}
        />
        <Square 
          currentPlayer={currentPlayer}
          nextPlayer={nextPlayer}
        />
        <Square 
          currentPlayer={currentPlayer}
          nextPlayer={nextPlayer}
        />
      </div>
    </div>
  )
}


function Square({currentPlayer, nextPlayer}){

  function handleClick(){
    if(currentPlayer === '' || currentPlayer === 'O'){
      nextPlayer('X');
    }
    if(currentPlayer === 'X'){
      nextPlayer('O');
    }
  }

  return(
    <div className="col">
      <button onClick={handleClick}>{currentPlayer}</button>
    </div>

  )
}


