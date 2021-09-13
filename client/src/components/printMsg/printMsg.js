export default function printMsg(msg){
    let list_messages = document.querySelector('.chatList')
    let item = document.createElement('li');
    item.textContent = `${msg[0]}: ${msg[1]}`;
    list_messages.appendChild(item);
}