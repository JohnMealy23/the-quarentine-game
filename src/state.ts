import { scenes } from "./scenes"
import { Scene, Option } from "./types"
import { view } from "./view"
import { makeSceneElements } from "./view"
import { createEditButton } from "./view"

/**
 * An application's state is the memory of the application.
 * It is kept up-to-date by the application, and the
 * application also reacts every time the state is updated.
 *
 * In this case, the application's state is represented by
 * an array.  This array holds every step (we'll call them
 * "scenes") the user takes through the application.
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
 * case will be a scene from the `scenes.ts` file.
 *
 * In this way, every time `updateState` is called with the
 * `type` of "proceed", the `state` array grows in length
 * by one.  This means the `state` will serve as a record
 * of the scenes the user traverses.
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

export type State = Scene[]

let state: State = []

export const updateState = (action, payload?) => {
    if (action === 'proceed') {
        state = state.map((scene) => {
            return scene
        })
        state.push(payload)
    } else if (action === 'editMode') {
        const stateCallback = (scene: Scene) => {
            if (payload === scene.id) {
                scene.editing = true
            }
            return scene
        }
        state = state.map(stateCallback)
    } else if (action === 'save') {
        const saveCallback = (scene: Scene) => {
            if (payload.id === scene.id) {
                // {

                //     id: 0,
                //     image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
                //     action: 'You wake up in the morning',
                //     options: [
                //         'blah',
                //         'blah2'
                //     ]

                // }
                return payload
            }
            return scene
        }
        state = state.map(saveCallback)
    } else if (action === 'addScene') {
        const newScene: Scene = {
            id: state.length,
            action: 'New Title',
            options: [
                {
                    text: 'Enter option text 1',
                    id: undefined
                        //how do you make this show a message that lets you input a number???
                },
                {
                    text: 'Enter option text 2',
                    id: undefined
                }
            ],
            image: undefined,
            editing: true,
            //okay if scene has editing or not. But if it does, it has to be boolean. 
        }
        state = state.map(scene => scene)
        state.push(newScene)
    }
    view(state)
    updateUrl()
}


const updateUrl = () => {
    const stateIds = state.map((scene) => {
        return scene.id
    }).join(';')
    history.pushState(state, 'title', '?' + stateIds)
    console.log(state)
}