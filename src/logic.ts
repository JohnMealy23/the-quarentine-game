import { updateState } from "./state"
import { scenes } from "./scenes"
import { Scene } from "./types"

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

export const move = (id: number) => {

    const callback = (scene: Scene): boolean => {
        return scene.id === id
    }
    
    const scene = scenes.find(callback)
    if(scene === undefined) {
        const endOfLine = document.createElement("h2")
        endOfLine.textContent = 'The End'
        document.body.appendChild(endOfLine)
    }
    updateState('proceed', scene)
}
