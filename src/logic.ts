import { updateState } from "./state"
import { Scene, Option, LiInputs } from "./types"
import Axios from "axios"

const array1 = [1, 2, 5, 8, 10, 21]
const array2 = [2, 8, 21, 22, 25, 27]
const newAnswer = [1, 5, 10, 22, 25, 27]
const hwArray = (firstAr, secondAr) => {
    const firstArReducer = (acc: number[], item: number) => {
        // if item is found in array2, dont push into new array.
        if (secondAr.includes(item) === false) {
            acc.push(item)
        }
        return acc
    }
    const reduceAnswer = firstAr.reduce(firstArReducer, [])
    return reduceAnswer
}
const finalAnswer = hwArray(array1, array2)




/**
 * logic.ts is a file where we'll write functions that
 * react to user behaviors, and make decisions based on
 * the state of the application.
 *
 * For starters, we'll just need one function in the
 * logic.ts file: the `move` function.  This function
 * accepts an argument named `id`. `id` is a single number.
 *
 * Note that we've pulled in `scenes` at the top of this file.
 * The `move` function needs to loop through the
 * `scenes`, finding the one that matches the `id`
 * argument it's been given.  It then needs to call
 * another function with this.
 *
 * This other function will be called `updateState`.
 * `updateState` is a function we'll work on in a bit.
 * For now, we'll just define it as () => {}.
 *
 * When calling `updateState` from the end of the
 * `move` function, pass in two arguments:
 *
 *   - The string, 'proceed'
 *
 *   - The scene you've pulled from the `scenes` array,
 *     which matches the `id` passed into the `move`
 *     function
 *
 * Last note - though those are a lot of words, the
 * actual `move` function is very short.  Define a new
 * variable by finding an entry in an array.  Call
 * another function with what you've found and a string.
 *
 * Pretty simple. : )
 */

export const move = (id: number | void) => {
    const scenePromise = Axios.get(`http://localhost:3033/scenes/scene/${id}`)
    // move is a function that makes a Promise called scenePromise, that calls to the server using the url? 
    scenePromise.then((response) => {
        // then, we return the Promise
        // This is what response looks like. It's a giant object. 
        // config: {url: "http://localhost:3033/scenes/scene/0", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
        // data: {scene: {…}}
        // headers: {content-length: "284", content-type: "application/json; charset=utf-8"}
        // request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
        // status: 200
        // statusText: "OK"
        // __proto__: Object

        const scene = response.data.scene
        // make a new variable called scene which burrows into the response object and gives us response.data.scene
        // it looks something like this:
        // action: "You wake up in the morning"
        // id: 0
        // image: "https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg"

        if (!scene) {
            //!scene = no scene

            // if scene (response.data.scene) is undefined, then we get the message: The End.
            const endOfLine = document.createElement("h2")
            endOfLine.textContent = 'The End'
            document.body.appendChild(endOfLine)
        } else {
            //else, you call UpdateState with ('proceed', and scene)
            updateState('proceed', scene)
        }
    })

    // const callback = (scene: Scene): boolean => {
    //     return scene.id === id
    // }

    // const scene = scenes.find(callback)
    // if (scene === undefined) {
    //     const endOfLine = document.createElement("h2")
    //     endOfLine.textContent = 'The End'
    //     document.body.appendChild(endOfLine)
    // }
    // updateState('proceed', scene)
}
const optionSaveCallback = ({ optionLi, optionLiIdNumber }: LiInputs): Option => {
    const text = optionLi.value
    const id = optionLiIdNumber.value
    return {
        text,
        id: Number(id),
        //get admin's input for the optionLi the same way you got user input for optionLiText
    }
}

export const saveSceneEdits = (scene: Scene, actionElement, optionLiArray, imageElement) => {
    scene.action = actionElement.value
    const optionLiArrayText = optionLiArray.map(optionSaveCallback)
    scene.options = optionLiArrayText
    scene.image = imageElement.value
    // switch editing mode off
    scene.editing = false
    // save!
    updateState('save', scene)
    // const optionLiArray = [
    //     {
    //         value: 'I am whatever the user has input'
    //     },
    //     {
    //         value: 'I am whatever the user has input'
    //     },    
    // ]
}

