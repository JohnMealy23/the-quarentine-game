# Tickets

## Bugs

## Features

* when you click on option, and try to edit it, you cannot edit the options of the next scene. (Time to Shop)

* multiple The Ends show up






* figure out why you get the undefines when you create scene. also why it goes haywire.

* make the id# of each scene visible to admin
* in editmode, we need to have a textbox for image
* figure out how to make things better in general
* click into the id of the new option, the id of the new option becomes the id of next scene user clicks. 'select next scene' option, which lets them click on the scene they want. 

* Create a shopping list.  Trigger different outcomes based on it.

* UI candy?
* Admin System
  + Shows you all the tracks (stack overflow danger!)
  + Allows you to select a frame
  + Allows you to add options to a frame
* save from browser into harddrive


## Completed

  + Figure out the ?0 - make a boilerplate so that it doesn't bug out when there's nothing there.
  + Deal with end-of-the-line
  + User can still click old bulletpoints.  Should only be able to click the last ones.
  + Auto-scroll to last item
  + Save state to URL
* Images
  + Add an `image` parameter to each `scene` in our `scenes` array.  The value of each `image` property should be the address from an image somewhere on the web.
    - Protip: If you right-click on any image on the internet, then click "copy image address", you'll have a URL to use for your `image` properties: http://snpy.in/SXTPIa
  + Update the `view.ts` file to add an image element to each `sceneElem` , so that each scene the user sees has an image displayed in it.
* Pointer for clicking
  + When a user hovers over an option, their mouse should turn into a pointer.
    - Protip: CSS is for how things look.
