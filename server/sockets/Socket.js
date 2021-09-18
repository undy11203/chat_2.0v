const usersSet = require("../Users")

module.exports = function socket(io){
    io.on("connection", (socket)=>{
        socket.on("joinGroup", (data)=>{
            socket.join(data[0])
            for(let i of usersSet){
                if(i.name == data[1]){
                    i.room = data[0]
                }
            }
            io.in(data[0]).emit('joinMsg', ["server", `User ${data[1]} join in ${data[0]}`])
        })
        socket.on('leaveGroup', ([group, user])=>{
            socket.leave(group)
        })
        socket.on('sendMsg', ([group, user, msg])=>{
            io.in(group).emit('getMsg', [user, msg])
        })
        socket.on('user', (data)=>{
            let user  = []
            for(let i of usersSet){
                if(i.room == data){
                    user.push(i.name)
                    console.log(i)
                }
            }
            socket.emit('getUser', user)
            user = []
        })
    })
}