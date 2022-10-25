import './App.css';
import {useState} from 'react';
import { TutorialGame, ExampleParentComponent } from './tutorial';

// Learning Functional Programming (No Mutations) : Passing Down Properties : Sharing State & Rendering Elements with Updated/New Values Changing Dependent on User Input


// problem : when choosing a square, all squares change state, when passing state down to the square, 
// each square changes state but they don't read from the same history

// attempted solutions : create multiple square components, each with their own state, reading from parent useState
// output : same

// problem : I did not know how to make the currentState of my Square element point to the value of an array using Index
// solution from tutorial : use a function to render the component and pass in a value prop that will point to the array index which is stored usingState
// note: in order to update the array with the new value, React is Functional(pure) it does not allow original states to be mutated
// you must creat a new copy of the array and mutate that copy, and setState to to point to the new array

// From Tutorial

/*
  If we don’t have a way to tell React when to re-render a component, 
  either React will have to constantly re-render all the components or 
  constantly run an algorithm that checks for changes in components’ state, 
  both options are not performant.
*/



export default function App() {
  const [player, setPlayer] = useState([{move: ''}]);


  // three components : App, Game & Square
  // App holds playerState : sets the next move, X or O
  // passed down as props to Game

  return (
    <>
    <TutorialGame/>
    <ExampleParentComponent/>
    </>
  )
}

function Game({currentPlayer, nextPlayer}){
  const [playerIndex, setPlayerIndex] = useState(0);

  // Game holds playerIndex state
  // playerIndex state, dictates who's turn it is, by adding moves to the array, it also acts as a history
  // Idea was, to test, what was the last move, if move was X, then next move is O and so forth


  // Nine square components, properties passed are the currentstate of index and an index updater function
  // along with the players passed from game

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




// Square component has a state that disables the button after one move, to ensure the player cannot change the output of the square chosen

function Square({playerOne, playerTwo, playerIndex, setPlayerIndex}){

  const [isActive, setIsActive] = useState(false);
  


  // the updatePlayer function is called onClick
  // it asks if currentPlayer[index].move is empty or 'O', return 'X
  // this is being tracked when the currentMove is added to the array
  // it then increases the index by 1, to move on to the next move

  function updatePlayer(){
    if(playerOne[playerIndex].move === '' || playerOne[playerIndex].move === 'O'){
      playerTwo([
        ...playerOne,
        {move: 'X'}
      ])
      setPlayerIndex(playerIndex + 1);
      setIsActive(true);
    }
    if(playerOne[playerIndex].move === 'X'){
      playerTwo([
        ...playerOne,
        {move: 'O'}
      ])
      setPlayerIndex(playerIndex + 1);
      setIsActive(true);

    }
    console.log(playerIndex);
    console.log(playerOne);
  }
  

  return(
    <div className="col">
      <button style={{opacity: isActive ? '1' : '0'}} onClick={updatePlayer}>{playerOne[playerIndex].move}</button>
    </div>

  )
}
