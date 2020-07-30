import { updateState } from "./state"
import { scenes } from "./scenes"
import { Scene, Option, LiInputs } from "./types"
import { createEditButton } from "./view"
import Axios from "axios"


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
        scenePromise.then((response) => {
            const scene = response.data.scene
            if (!scene) {
                //!scene = no scene
                const endOfLine = document.createElement("h2")
                endOfLine.textContent = 'The End'
                document.body.appendChild(endOfLine)
            }
            updateState('proceed', scene)
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
const optionSaveCallback = ({optionLi, optionLiIdNumber}: LiInputs): Option => {
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