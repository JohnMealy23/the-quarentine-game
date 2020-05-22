import { move } from './logic'

const userProgress = window.location.search.replace('?', '')
if (userProgress === '') {
    move(0)
} else {

    const stateIds = userProgress.split(';')


    console.log(userProgress)

    const callbackMove = (id) => {
        const numId = parseInt(id)
        move(numId)
    }
    stateIds.forEach(callbackMove)
}