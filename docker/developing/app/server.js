const express = require('express')
const app = express()

const user = require('./src/database/user')

app.use(express.json())

app.get('/', (req, resp) => {
    resp.json({mensagem: 'olha ai!'})
})

// TODO: create a service
// call redis, if not there, call database
// then save it into redis.

app.get('/user', async (req, resp) => {
    resp.json(await user.find())
})

console.log('init server')
app.listen(4000)
