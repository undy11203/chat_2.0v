require('dotenv').config()
const colors = require('colors')
const cors = require('cors')
// const { Socket } = require('dgram')
const express = require('express')
// const router = require('./router/router')
const app = express()
const server = require('http').createServer(app)
//const io = require('socket.io')(server, {
//     cors: {
//         origin: 'http://localhost:3000'
//     }
// })

//const PORT = process.env.PORT || 5000

//app.use(express.json())
// app.use(cors({
//     credential: true,
//     origin: process.env.CLIENT_URL
// }))
// app.use('/api', router)

//const socket = new Socket(io)
console.log('123')
console.log('124')
const start = async () => {
    try {
        app.listen(6000, () => console.log(`\nServer on ${6000}`))
    } catch (e) {
        console.log("Error in main: " + e)
    }
}
start()