import { Frame } from "./types";

/**
 * The view function takes an array of Frame objects as
 * its argument.
 *
 * You can see the explicit structure of a Frame object
 * in the `types.ts` file, and examples of Frame objects
 * in the `frames.ts` file.
 *
 * The view function loops through the array of Frames,
 * and for each one it builds and inserts the following:
 *
 * Create a `div` element (we'll call it `container`)
 * which will serve as the container for all of the
 * Frame's elements. Using `container.appendChild`,
 * we'll insert the following elements into the
 * container.
 *
 *   - An h2 element, into which we'll insert the Frame's
 *     `action` text.
 *
 *   - A `ul` element, to contain the options the user
 *     has.
 *
 *   - An `li` element for every option in the Frame's
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

export const view = (frames: Frame[]) => {

}
