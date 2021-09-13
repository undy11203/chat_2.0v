import React, { useContext, useState } from 'react'
import { SocketContext } from '../../..'
import Socket from '../../../sockets/socket'

const FormForMsg = ({useGroup}) => {
    const Socket = useContext(SocketContext)
    const [msg, setMsg] = useState(null)

    function sendMsg(e){
        e.preventDefault()
        Socket.sendMsg(useGroup, localStorage.getItem('username'), msg)
        setMsg('')
    }

    return (
        <form>
            <input value={msg} onChange={(e)=> setMsg(e.target.value)} type='text' placeholder='Msg...'/>
            <button onClick={(e)=>sendMsg(e)}>Send</button>
        </form>
    )
}

export default FormForMsg
