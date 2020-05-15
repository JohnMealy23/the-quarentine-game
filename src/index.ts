import { move } from './logic'

const userProgress = window.location.search.replace('?', '')
//this is where the boilerplate goes I think
if(userProgress === '') {
   move(0)
}
const stateIds = userProgress.split(';')


console.log(userProgress)

const callbackMove = (id) => {
    const numId = parseInt(id)
    move(numId)    
}
stateIds.forEach(callbackMove)