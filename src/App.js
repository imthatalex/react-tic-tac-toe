import './App.css';
import {useState} from 'react';

export default function App() {
  const [player, setPlayer] = useState([{move: ''}]);

  return (
    <Game 
      currentPlayer={player}
      nextPlayer={setPlayer}
    />
  )
}

function Game({currentPlayer, nextPlayer}){
  const [playerIndex, setPlayerIndex] = useState(0);


  return(
    <div className='container'>


      <div className="row">
        <Square 
          playerOne={currentPlayer}
          playerTwo={nextPlayer}
          playerIndex={playerIndex}
          setPlayerIndex={setPlayerIndex}
        />
        <Square 
          playerOne={currentPlayer}
          playerTwo={nextPlayer}
          playerIndex={playerIndex}
          setPlayerIndex={setPlayerIndex}
        />
        <Square 
          playerOne={currentPlayer}
          playerTwo={nextPlayer}
          playerIndex={playerIndex}
          setPlayerIndex={setPlayerIndex}
        />
      </div>


      <div className="row">
        <Square 
          playerOne={currentPlayer}
          playerTwo={nextPlayer}
          playerIndex={playerIndex}
          setPlayerIndex={setPlayerIndex}
        />
        <Square 
          playerOne={currentPlayer}
          playerTwo={nextPlayer}
          playerIndex={playerIndex}
          setPlayerIndex={setPlayerIndex}
        />
        <Square 
          playerOne={currentPlayer}
          playerTwo={nextPlayer}
          playerIndex={playerIndex}
          setPlayerIndex={setPlayerIndex}
        />
      </div>


      <div className="row">
        <Square 
          playerOne={currentPlayer}
          playerTwo={nextPlayer}
          playerIndex={playerIndex}
          setPlayerIndex={setPlayerIndex}
        />
        <Square 
          playerOne={currentPlayer}
          playerTwo={nextPlayer}
          playerIndex={playerIndex}
          setPlayerIndex={setPlayerIndex}
        />
        <Square 
          playerOne={currentPlayer}
          playerTwo={nextPlayer}
          playerIndex={playerIndex}
          setPlayerIndex={setPlayerIndex}
        />
      </div>


    </div>
  )
}






function Square({playerOne, playerTwo, playerIndex, setPlayerIndex}){



  function updatePlayer(){
    if(playerOne[playerIndex].move === '' || playerOne[playerIndex].move === 'O'){
      playerTwo([
        ...playerOne,
        {move: 'X'}
      ])
      setPlayerIndex(playerIndex + 1);
    }
    if(playerOne[playerIndex].move === 'X'){
      playerTwo([
        ...playerOne,
        {move: 'O'}
      ])
      setPlayerIndex(playerIndex + 1);
    }
    console.log(playerIndex);
    console.log(playerOne);
  }
  

  return(
    <div className="col">
      <button onClick={updatePlayer}>{playerOne[playerIndex].move}</button>
    </div>

  )
}

