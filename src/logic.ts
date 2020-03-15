import { frames } from "./frames"

/**
 * logic.ts is a file where we'll write functions that
 * react to user behaviors, and make decisions based on
 * the state of the application.
 *
 * For starters, we'll just need one function in the
 * logic.ts file: the `move` function.  This function
 * accepts an argument named `id`. `id` is single number.
 *
 * Note we've pulled in `frames` at the top of this file.
 * The `move` function needs to loop through the
 * `frames`, finding the one that matches the `id`
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
 *   - The frame you've pulled from the `frames` array,
 *     which matches the `id` passed into the `move`
 *     function.
 */
export const move = () => {

}

const updateState = () => {}
