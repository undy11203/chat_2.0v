module.exports = function socket(io){
    io.on("connection", (socket)=>{
        let user = []
        socket.on("joinGroup", (data)=>{
            console.log(data)
            socket.join(data[0])
            user += data[1]
            io.in(data[0]).emit('joinMsg', ["server", `User ${data[1]} join in ${data[0]}`])
        })
        socket.on('leaveGroup', ([group, user])=>{
            socket.leave(group)
        })
        socket.on('sendMsg', ([group, user, msg])=>{
            io.in(group).emit('getMsg', [user, msg])
        })
        socket.emit('getUser', user)
    })
}