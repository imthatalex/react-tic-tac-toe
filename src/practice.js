import {useState} from 'react';
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