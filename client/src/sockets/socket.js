import printMsg from "../components/printMsg/printMsg"

class Socket{
    constructor(socket){
        this.socket = socket
    }

    joinGroup(group, user){
        console.log(1)
        this.socket.emit('joinGroup', [group, user])
        
    }
    joinMsg(){
        this.socket.on('joinMsg', (data)=>{
            printMsg(data)
        })
    }
    leaveGroup(group, user){
        this.socket.emit('leaveGroup', [group, user])
    }
    sendMsg(group, user, msg){
        this.socket.emit('sendMsg', [group, user, msg])
    }
    getMsg(){
        this.socket.on('getMsg', ([user, msg])=>{
            printMsg([user, msg])
        })
    }
    test(){
        console.log('test')
    }
}

export default Socket