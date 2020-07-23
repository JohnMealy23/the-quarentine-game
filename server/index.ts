import * as cors from 'cors'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as config from './config'
import { scenes } from '../src/scenes';
const app = express();

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
app.get('/hello', (request, response) => {
    console.log(request.body)
    return response.send({
        messages: 'hello!',
        data: scenes,
    })
})

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