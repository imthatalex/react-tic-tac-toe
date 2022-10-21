import './App.css';
import { useState } from 'react';


// The Square component will have 2 props: a value (X or O) and an onClick function that will change the value depends on the game’s state.

// Props were created in Square Component, Destructured in Params, Passed down into the Return & then Called in the Square Component within Game

function Square({value, onClick}){

    return(
        <div className="col">
            <button onClick={onClick}>{value}</button>
        </div>
    )
}   

// Add the Game component right after the Square component, because we want the Game to be our top level component


export function TutorialGame(){

    /*
        In order to make the game work we have to keep track of the state of each square: 
        change their value as the players click them and save those values until the game ends
    */

    // The renderSquare function will define the logic of rendering a Square.

        function renderSquare(i) {
            return (
            <Square
                value={i}
                onClick={null}
            />
            )
        }


    // Since the onClick function needs to know about the game’s state beyond the individual square, it will be defined in the Game component.

    // The game component should render 9 Squares, organised in a grid, or in other words 3 rows with 3 Squares in each row. 

    // in Comparison, the Square component is not Directly Called, it is called and rendered through a function instead


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
        </div>
    )
}





function Restart(){

}