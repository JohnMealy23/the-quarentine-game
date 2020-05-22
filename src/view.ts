import { Scene, Option } from "./types";
import { move } from "./logic";

/**
 * The view function takes an array of scene objects as
 * its argument.
 *
 * You can see the explicit structure of a scene object
 * in the `types.ts` file, and examples of scene objects
 * in the `scenes.ts` file.
 *
 * The view function loops through the array of scenes,
 * and for each one it builds and inserts the following:
 *
 * Create a `div` element (we'll call it `container`)
 * which will serve as the container for all of the
 * scene's elements. Using `container.appendChild`,
 * we'll insert the following elements into the
 * container:
 *   - An h2 element, into which we'll insert the scene's
 *     `action` text.
 *
 *   - A `ul` element, to contain the options the user
 *     has.
 *
 *   - An `li` element for every option in the scene's
 *     `options` array. The view function will need to
 *     loop through the `options` array, creating an
 *     `li` element for each option, and appending it
 *     to the `ul`.
 *
 *       - Each `option` `li` should contain the text
 *         of the option.
 *
 *       - We also need to add a click event to each
 *         `li`, using the `addEventListener` method.
 *         For now, the function we add with
 *         `addEventListener`s can just look like this:
 *         () => {}
 *
 * Don't forget to insert each of the above-mentioned
 * elements into their `container` divs, and to insert
 * each `constainer` div into the DOM!
 */

 //scene[] contains all the scenes previously selected by player
export const view = (scenes: Scene[]) => {
    const gameContainer = document.getElementById('content')
    gameContainer.innerHTML = ''

    const sceneElems = scenes.map(makeSceneElements)

    sceneElems.forEach(sceneElem => gameContainer.appendChild(sceneElem))
    // TODO: scroll user to bottom
    window.scrollTo(0, 1000)
}

const makeSceneElements = (scene: Scene, index: number, scenes: Scene[]) => {
    const lastScene = index + 1 === scenes.length
    const container = document.createElement("div")

//     *   - An h2 element, into which we'll insert the scene's
//  *     `action` text.
//  *

    const actionElement = document.createElement("h2")
    actionElement.innerText = scene.action
    container.appendChild(actionElement)
//  *
//  *   - A `ul` element, to contain the options the user
//  *     has.

    const optionsUl = document.createElement("ul")
    container.appendChild(optionsUl)

//  *
//  *   - An `li` element for every option in the scene's
//  *     `options` array. The view function will need to
//  *     loop through the `options` array, creating an
//  *     `li` element for each option, and appending it
//  *     to the `ul`.
//  *

    const liCallback = (option: Option) => {

        // {
        //     text: 'Brush your teeth.',
        //     id: 1
        // },

        const optionLi = document.createElement("li")
        optionLi.innerText = option.text
        optionLi.className = 'option'
        optionsUl.appendChild(optionLi)
        optionLi.addEventListener('click', () => {
            if(lastScene) {
                move(option.id)
            } 
            //????? my final guess
        })

        // return optionLi.addEventListener('click', () => {
        //     move(option.id)
        // })
    }
    scene.options.forEach(liCallback)

    return container



    // so I know there is a scope issue but I don't know how to solve it.
    // but my strategy is to remove the EventListener for the click after it has done what it needs to do.
    // Is this the right place to put it???
    // optionLi.removeEventListener('click', () => {
    //     move(option.id)
    // })
  
    // User can still click old bulletpoints.  Should only be able to click the last ones.

//  *       - Each `option` `li` should contain the text
//  *         of the option.
//  *
//  *       - We also need to add a click event to each
//  *         `li`, using the `addEventListener` method.
//  *         For now, the function we add with
//  *         `addEventListener`s can just look like this:
//  *         () => {}
//  *
//  * Don't forget to insert each of the above-mentioned
//  * elements into their `container` divs, and to insert
//  * each `constainer` div into the DOM!
//  */
}
