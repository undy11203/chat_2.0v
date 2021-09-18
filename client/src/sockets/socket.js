import printMsg from "../components/print/printMsg"

class Socket{
    constructor(socket){
        this.socket = socket
    }

    joinGroup(group, user){
        this.socket.emit('joinGroup', [group, user])
        this.group = group
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
    getUser(group){
        this.socket.emit('user', group)
        this.socket.on('getUser', (user)=>{
            console.log(user)
            let list_messages = document.querySelector('.userInRoomList')
            list_messages.innerHTML = ''
            for(let i =0; i < user.length;i++){
                let item = document.createElement('li');
                if(i != user.length-1){
                    item.textContent = `${user[i]}, `;
                }else{
                    item.textContent = `${user[i]}`;
                }
                list_messages.appendChild(item);
            }    
            console.log(list_messages)
        })
    }
    test(){
        console.log('test')
    }
}

export default Socket