require('dotenv').config()
const colors = require('colors')
const cors = require('cors')
const express = require('express')
const router = require('./router/router')
const socket = require('./sockets/socket')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: process.env.CLIENT_URL
    }
})

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    credential: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)

socket(io)

const start = () => {
    try {
        server.listen(PORT, () => console.log(`\nServer on ${PORT}`))
    } catch (e) {
        console.log("Error in main: " + e)
    }
}
start()