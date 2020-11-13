import { getMaxListeners } from 'process';
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { clearScreenDown } from 'readline';
import { updateState } from './state';
import { makeSceneElements } from "./view";

//need to make state, which has a property of x, and y
const state = {
    x: 0,
    y: 0
}

//enum is like an object / type
// you can say Directions.up, and it'll be 'up'
enum Directions {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
}

//how to account for directions??
//const direction = Button.text???


//This is function for what the button does?
//direction is "up/down/right/left"
//interfaces are schematics for an object. They must be used as a type. 
interface ButtonOpts {
    fn: (direction: Directions) => any
    text: Directions
}

//Button is a component - returns react elements
const Button = ({ fn, text }: ButtonOpts) => {
    const cb = (e) => {
        console.log(e)
        debugger
        fn(text)
    }
    return <button onClick={cb}>
        {text}
    </button>
}


// Test is a component, and a function
function App() {
    const [currentDirections, setCurrentDirections] = useState(state)
    // same as above:
    // const x = useState()
    // const currentDirections = x[0]
    // const setCurrentDirections = x[1]
    // useState is a native function of React that gives you an array
    // we use destructuring to gather the first two items of that array
    // currentDirections is a value
    // setCurrentDirections is a function that when called, takes one argument. 
    // That argument sets the value of currentDirections (so you can update it)
    // setCurrentDirections, when fired, will cause App to refire with the new currentDirections

    const buttonFunction = (direction: Directions) => {
        // ... disassembles currentDirections and catches them in newDirections. This is known as a shallow clone. 
        const newDirections = { ...currentDirections }
        // clicks 'up' the value of currentDirections.x increases by 1
        if (direction === Directions.up) {
            newDirections.y--
            // this is the same as currentDirections.x = currentDirections.x + 1
        }
        // clicks 'right' the value of currentDirections.y increases by 1
        if (direction === Directions.right) {
            newDirections.x++
        }
        // clicks 'down' the value of newDirections.x decreases by 1
        if (direction === Directions.down) {
            newDirections.y++
        }
        // clicks 'left' the value of newDirections.y decreases by 1
        if (direction === Directions.left) {
            newDirections.x--
        }
        // clicks any button, "you"'s position inside of its parent div is adjusted to reflect the values of state.
        setCurrentDirections(newDirections)

        // clicks, "you" never leaves the bounds of the parent div.
        // if (newDirections.x <= 0) {
        //     newDirections.x
        // }
        // if (newDirections.y <= 0) {
        //     newDirections.y
        // }

        //if you goes out of gameField, then do nothing?


    }

    const elem = (
        <div>
            <Button fn={buttonFunction} text={Directions.up}></Button>
            <Button fn={buttonFunction} text={Directions.down}></Button>
            <Button fn={buttonFunction} text={Directions.left}></Button>
            <Button fn={buttonFunction} text={Directions.right}></Button>
            <div
                style={{
                    backgroundColor: 'blue',
                    width: '1000px',
                    height: '50px',
                    position: 'relative'
                    // is this not a thing?
                    // overflow: 'hidden',
                }}
                id='gameField'
            >

                {/* Inside the div, create a child div 
        that is 10 pixels by 10 pixels, 
        has an orange background, 
        and has an id of "you" */}
                <div
                    style={{
                        backgroundColor: 'orange',
                        width: '10px',
                        height: '10px',
                        position: 'relative',
                        left: currentDirections.x + 'px',
                        top: currentDirections.y + 'px',

                    }}
                    id='you'
                >

                </div>

                <h1>
                    All the things!
                </h1>

            </div>
        </div>
    )
    return elem
}
const rootElem = document.getElementById('root')

// <App /> is a function. Whatever it returns, goes into rootElem
ReactDOM.render(<App />, rootElem);



