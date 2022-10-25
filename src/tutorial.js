import './App.css';
import { useState } from 'react';


// Source - https://medium.com/@shifrb/how-to-build-tic-tac-toe-with-react-hooks-ca37f6040022 

// The Square component will have 2 props: a value (X or O) and an onClick function that will change the value depends on the game’s state.

// Props were created in Square Component, Destructured in Params, Passed down into the Return & then Called in the Square Component within Game

function Square({value, onClick}){

    return(
        <div className="col">
            <button className="button" onClick={onClick}>{value}</button>
        </div>
    )
}   

// Add the Game component right after the Square component, because we want the Game to be our top level component


export function TutorialGame(){
    /*
        In order to make the game work we have to keep track of the state of each square: 
        change their value as the players click them and save those values until the game ends
    */
    // Creates an array with nine elements, all values set to null, it is not an object array
    // We want the initial state of the squares to be null, and change each square according to the player’s clicks.
        const [ squares, setSquares ] = useState(Array(9).fill(null));
        // we want to keep track of whose turn it is
        const [ isXNext, setIsXNext ] = useState(true);
        const winner = calculateWinner(squares);

    // getStatus function displays information

    function getStatus(){
        if(winner){
            return "Winner: " + winner;
        }
        else if(isBoardFull(squares)){
            return "Draw!"
        }
        else {
            return "Next Player: " + (isXNext ? 'X' : 'O');
        }
    }


    // The renderSquare function will define the logic of rendering a Square.


    // value points to the index in the array
        function renderSquare(i) {
            return ( 
            <Square
                value={squares[i]}
                onClick={() => {
                // checks to see if the value of square is not empty or if a winner has not been decided

                // prevents double clicking
                if(squares[i] != null || winner != null ){
                    return;
                }
                //  We can’t change the squares array directly, because it mutates the array, what we can do is make a copy of the array and mutate the copy
                // slice methods is used to return a copy of the array
                const nextSquares = squares.slice();
                // now the copy is mutated
                // determine whether the square will render X or O based off a boolean value stored in state
                nextSquares[i] = (isXNext ? 'X' : 'O');
                  // setSquares : the updaterFunc : must be called in order to update squares(currentState)
                setSquares(nextSquares);
                /*
                Variables that are part of the component’s state when the component is rendered,
                can only change when the component re-render, but not between renders. 
                */
                // toggle the turn for the player by updating state
                setIsXNext(!isXNext);
            }}
            />
            );
        }


        // renderRestart Func will simply display the button, the handler function is in the return statement

        function renderRestartButton(){
            return(
                <Restart
                    onClick={() => {
                        // sets all square values back to null
                        setSquares(Array(9).fill(null));
                        // changes player 1 back to X
                        setIsXNext(true);
                    }}
                />
            )
        }



    // Since the onClick function needs to know about the game’s state beyond the individual square, it will be defined in the Game component.

    // The game component should render 9 Squares, organised in a grid, or in other words 3 rows with 3 Squares in each row. 

    // in Comparison, the Square component is not Directly Called, it is called and rendered through a function instead
    // allowing you to pass index as a parameter to point to the value of each square


    return(
        <div className="container">
            <div className="row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div className="row">
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



/*

because clicking on the restart button should change the state of the Game component, 
the onClick function for the restart button will be defined at the Game component level and
will be passed on to the Restart component as a prop.

*/

function Restart({onClick}){
    return (
        <button onClick={onClick}>Play Again</button>
    )
}



function calculateWinner(squares){

    // this is to check all the possible lines in this game that could result in a win
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

    // you must iterate through the possibleLine array in order to look for a match to calculate a win
    // here we use a forLoop to iterate through the entire length of possibleLines
    for(let i = 0; i < possibleLines.length; i++) {
        // Unkown Declaration
        // Winning Line Calculation : uses three variables to check the variables in each array of possibleLines
        const [a,b,c] = possibleLines[i];
        // check if Square is not null, then check if Square matches the other two Squares in the array
        // these three variables act as a pointer to the index in Squares

        // we are iterating through the index of squares and using possibleLines as a guide to check the values of each index
        // then we check if the values of the index we requested match
        if(squares[a] && squares[a] === squares[b] && squares[a] && squares[a] === squares[c]) {
            return squares[a];
        }
    }


}


// checks to see if the board is full in the event there is a draw
// squares is delcared locally within the Game component, but can still be passed on to isBoardFull ?
// iterates through squares array and checks if all values are not empty
function isBoardFull(squares){
    for(let i = 0; i < squares.length; i++){
        if(squares[i] == null){
            return false;
        }
    }
    return true;
}







// Tutorial Practice


// Create the Component, with a VALUE you want to UPDATE using an ONCLICK
function ExampleComponent({value, onClick}){
    return(
        <div className="col">
            <button className="button" onClick={onClick}>{value}</button>
        </div>
    )
}

// The Parent Component, has to hold STATE, to ensure each Component SHARES STATE
// Render the Component with a Function Call in order to CREATE an Array, in which then you
// Can point the VALUE of the Child Component to the Index of that Array
export function ExampleParentComponent(){
    const [testState, setTestState] = useState(Array(3).fill(null));
    const [player, setPlayer] = useState(true);

    function renderButton(index){
        return(
            <ExampleComponent
                value={testState[index]}
                onClick={() => {
                    const copyButtons = testState.slice();
                    copyButtons[index] = player ? 'X' : 'O';
                    setTestState(copyButtons);
                    setPlayer(!player);
                }}
            />
        )
    }

    return(
        <div className="container">
            <div className="row">
                {renderButton(0)}
                {renderButton(1)}
                {renderButton(2)}
            </div>
        </div>
    )

}