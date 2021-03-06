import { Scene, Option } from "./types";
import { move, saveSceneEdits } from "./logic";
import { scenes } from "./scenes";
import { updateState } from "./state";

//scene[] contains all the scenes previously selected by player

//we've just come from state.ts, which called view(state), which should be an array with the scenes that have been chosen
export const view = (scenes: Scene[]) => {
    // we make a variable called gameContainer, which makes a content HTMLElement?? and makes it nothing???
    const gameContainer = document.getElementById('content')
    gameContainer.innerHTML = ''

    // makes a sceneElems variable, which a new array which holds the results of calling makeSceneElements for each item in the scenes array
    // it makes what you see on the page (ex: picture of queen, h2 headings, options, etc...)
    const sceneElems = scenes.map(makeSceneElements)

    sceneElems.forEach(sceneElem => gameContainer.appendChild(sceneElem))
    // append each scene element into the gameContainer

    // make a new button called addSceneElement, which says 'create scene.' When you click on it, it adds a scene, and appends it.
    const addSceneElement = document.createElement('button')
    addSceneElement.innerText = 'create scene'
    addSceneElement.addEventListener('click', addScene)
    gameContainer.appendChild(addSceneElement)
    // scroll user to bottom
    window.scrollTo(0, 1000)
}
//you finished the view function! go back to state.ts


const addScene = () => {
    updateState('addScene')
}

export const makeSceneElements = (scene: Scene, index: number, scenes: Scene[]) => {
    const lastScene = index + 1 === scenes.length
    //create a container for the scene.id and append that to the scenes container
    //this gives admin the ability to see the id of every scene, so they know what to enter when creating a new scene / editing a scene
    const container = document.createElement("div")
    container.style.width = '450px'
    container.style.height = 'auto'
    container.style.border = '1px solid grey'
    container.style.marginBottom = '5px'
    container.style.padding = '5px'

    // create scenes title
    let actionElement: HTMLInputElement | HTMLHeadingElement
    if (scene.editing === true) {
        actionElement = document.createElement('input');
        (actionElement as HTMLInputElement).value = scene.action
    } else {
        actionElement = document.createElement("h2")
        actionElement.innerText = scene.action
    }
    container.appendChild(actionElement)


    // create edit button
    const editButton = createEditButton(scene.id)
    container.appendChild(editButton)

    if (scene.editing === true) {
        const saveButton = document.createElement('button')
        saveButton.innerText = 'Save'
        container.appendChild(saveButton)
        saveButton.addEventListener('click', () => {
            saveSceneEdits(scene, actionElement, optionLiArray, imageElement)
            // update scene with new user input values

        })
    }

    //create image
    let imageElement
    if (scene.editing === true) {
        imageElement = document.createElement('input');
        imageElement.value = scene.image
    } else {
        imageElement = createImageElement(scene.image)
    }
    container.appendChild(imageElement)

    // if(scene.editing === true) {
    //     sceneImage = document.createElement('input');
    //     (sceneImage as HTMLInputElement).value = scene.image?
    // } else {
    //     createImageElement(scene.image)
    // }  
    // container.appendChild(sceneImage)  


    const optionsUl = document.createElement("ul")
    container.appendChild(optionsUl)

    const liCallback = (option: Option) => {
        let optionLi
        let optionLiIdNumber
        if (scene.editing === true) {
            //make text field for editing options
            optionLi = document.createElement('input')
            optionLi.value = option.text
            optionLiIdNumber = document.createElement('input')
            optionLiIdNumber.value = option.id
            optionsUl.appendChild(optionLiIdNumber)
        } else {
            optionLi = document.createElement("li")
            optionLi.innerText = option.text
            optionLi.className = 'option'
            optionLi.addEventListener('click', () => {
                if (lastScene) {
                    move(option.id)
                }
            })
        }
        optionLi.id = option.id
        optionsUl.appendChild(optionLi)
        return { optionLi, optionLiIdNumber }
        //somehow get this to return both optionLi and optionLiIdNumber
    }
    const optionLiArray = scene.options.map(liCallback)

    if (scene.editing === true) {
        const addOptionButton = document.createElement('button')
        addOptionButton.innerText = 'create option'
        const action = 'click'
        const payload = () => {
            updateState('addOption', scene.id)
        }
        addOptionButton.addEventListener(action, payload)
        container.appendChild(addOptionButton)
    }
    return container
}

export const createEditButton = (sceneId) => {
    const editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.style.marginBottom = '10px'
    editButton.style.padding = '5px'
    editButton.addEventListener('click', () => {
        updateState('editMode', sceneId)
    })
    return editButton
}

const createImageElement = (sceneImage) => {
    const imageElement = document.createElement('img')
    imageElement.src = sceneImage
    imageElement.className = 'sceneImage'
    return imageElement
}

