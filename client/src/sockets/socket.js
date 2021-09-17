import printMsg from "../components/print/printMsg"

class Socket{
    constructor(socket){
        this.socket = socket
    }

    joinGroup(group, user){
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
    getUser(){
        this.socket.on('getUser', (user)=>{
            let list_messages = document.querySelector('.userInRoomList')
            for(let i in user){
                let item = document.createElement('li');
                item.textContent = `${i}`;
                list_messages.appendChild(item);
            }    
        })
    }
    test(){
        console.log('test')
    }
}

export default Socket