import { Scene, Option } from "./types";
import { move } from "./logic";
import { scenes } from "./scenes";
import { updateState } from "./state";

//scene[] contains all the scenes previously selected by player
export const view = (scenes: Scene[]) => {
    const gameContainer = document.getElementById('content')
    gameContainer.innerHTML = ''

    const sceneElems = scenes.map(makeSceneElements)

    sceneElems.forEach(sceneElem => gameContainer.appendChild(sceneElem))

    // scroll user to bottom
    window.scrollTo(0, 1000)
}


const makeSceneElements = (scene: Scene, index: number, scenes: Scene[]) => {
    const lastScene = index + 1 === scenes.length
    const container = document.createElement("div")
    container.style.width = '450px'
    container.style.height = 'auto'
    container.style.border = '1px solid grey'
    container.style.marginBottom = '5px'
    container.style.padding = '5px'

    // create scenes title
    let actionElement
    if (scene.editing === true) {
        actionElement = document.createElement('input')
    } else {
        actionElement = document.createElement("h2")
        actionElement.innerText = scene.action
    }
    container.appendChild(actionElement)

    // create edit button
    createEditButton(scene.id)

    if (scene.editing === true) {
        const saveButton = document.createElement('button')
        saveButton.innerText = 'Save'
        container.appendChild(saveButton)
        saveButton.addEventListener('click', () => {
            scene.action = actionElement.value
            scene.editing = false
            updateState('save', scene)
        })
    }


    const imageElement = document.createElement('img')
    imageElement.src = scene.image
    imageElement.className = 'sceneImage'
    container.appendChild(imageElement)

    const optionsUl = document.createElement("ul")
    container.appendChild(optionsUl)

    const liCallback = (option: Option) => {

        const optionLi = document.createElement("li")
        optionLi.innerText = option.text
        optionLi.className = 'option'
        optionsUl.appendChild(optionLi)
        optionLi.addEventListener('click', () => {
            if (lastScene) {
                move(option.id)

            }
          
        })

        //create edit button
        const optionLiButton = document.createElement('button')
        optionLiButton.innerText = 'Edit'
        optionLi.appendChild(optionLiButton)
        optionLiButton.style.marginBottom = '10px'
        optionLiButton.style.padding = '5px'
        optionLiButton.addEventListener('click', () => {
            updateState('editOptionMode', scene.options)
        })

        if (scene.editing === true) {
            const saveOptionButton = document.createElement('button')
            saveOptionButton.innerText = 'Save'
            optionLi.appendChild(saveOptionButton)
            saveOptionButton.addEventListener('click', () => {
                scene.options = optionLi.value
                    scene.editing = false
                updateState('saveOption', scene)
            })
        }

        // return optionLi.addEventListener('click', () => {
        //     move(option.id)
        // })
    }
    scene.options.forEach(liCallback)

    return container
}

const createEditButton = (sceneId) => {
    const editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.style.marginBottom = '10px'
    editButton.style.padding = '5px'
    editButton.addEventListener('click', () => {
        updateState('editMode', sceneId)
    })
    container.appendChild(editButton)
    return editButton
}