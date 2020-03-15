import { frames } from "./frames"
import { Frame } from "./types"

/**
 * An application's state is the memory of the application.
 * It is kept up-to-date by the application, and the
 * application also reacts every time the state is updated.
 *
 * In this case, the application's state is represented by
 * an array.  This array holds every step (we'll call them
 * "frames") the user takes through the application.
 *
 * The `updateState` function takes two arguments: `type` and
 * `payload`:
 *   - `type` is a string that denotes how we'll update the
 *     `state`.
 *   - `payload` is the information with which we'll be
 *     updating the `state`.
 *
 * The `updateState` function will handle many different
 * situations.  We don't need to worry about what all those
 * situations are right now - we'll tackle each of them as
 * they come.  For now, let's just work on the first case.
 *
 * Inside the body of the `updateState`, create an `if`
 * statement, which tests the value of the `type` argument.
 * If the `type` argument is the word "proceed", simply
 * `push` the `payload` argument into `state` array.  Though
 * we don't explicitly state it here, the `payload` in this
 * case will be a Frame from the `frames.ts` file.
 *
 * In this way, every time `updateState` is called with the
 * `type` of "proceed", the `state` array grows in length
 * by one.  This means the `state` will serve as a record
 * of the Frames the user traverses.
 *
 * Finally, after *any* change to the state (thus, outside of
 * any `if` statement), the `updateState` function concludes
 * by calling another function - the `next` funtion.  When
 * the `next` function is called, the entire `state` array
 * is passed into the `next` function.
 *
 * For now we'll just define the `next` function as:
 * () => {}
 *
 * Last note - though those are a lot of words, the
 * actual `updateState` function is very short.  One `if`
 * statement.  One push to an existing array.  One call
 * to another function.
 *
 * Pretty simple. : )
 */

let state: Frame[] = [frames[0]]

export const updateState = () => {

}

const next = () => {}
