import * as cors from 'cors'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as config from './config'
import scenes from '../src/scenes';
const app = express();
const fs = require('fs')

const origin = `http://localhost:${config.clientPort}`
const corsOptions = {
    origin,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('src'));
app.use(express.static('server'));

//hello endpoint
app.get('/hello', (request, response) => {
    console.log(request.body)
    return response.send({
        messages: 'hello!',
        data: scenes,
    })
})

app.post('/edit', (request, response) => {
    const newScene = request.body.scene
    console.log(request.body)
    // replace existing scene in scenes array with incoming newScene
    // use .map?    
    const replaceNewScene = (scene) => {
        if (scene.id === newScene.id) {
            return newScene
            // Object.assign(scene, newScene)
            //do i have return the updated scene afterwards?? or does Object do that already?
        }
        else {
            return scene
        }
    }
    const newScenes = scenes.map(replaceNewScene)
    const newScenesString = JSON.stringify(newScenes, null, 4)
    // use fs node module to save scenes array to disk
    // use .writesync
    fs.writeFileSync('../src/scenes', newScenesString)
    // or is it fs.writeFileSync('scenes.ts', response)
    // can I do this????? 
    // what happens with response?
    // end goal: when you edit a scene in editMode, it replaces the scene you edited and saves it to the disk so it can be called later
    // tack on an axios request to the end of the editMode function - you don't need to change anything on the browser side

})

//scenes endpoint
app.get('/scenes/scene/:sceneId/', (request, response) => {
    console.log(request.body)
    const sceneId = Number(request.params.sceneId)
    const callback = (scene) => {
        return scene.id === sceneId
    }
    const scene = (scenes as any).find(callback)
    console.log({ sceneId })
    return response.send({ scene })
})

//instead of getting scenes locally, call the server for it
//

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}!`)
    // open(`http://localhost:${port}`)
});

const myObj = {
    spoon: 5,
    fork: 3
}

const { spoon, fork } = myObj

console.log(spoon, fork, origin)
