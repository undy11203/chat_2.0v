import React, { useContext, useState } from 'react'
import { SocketContext } from '../../..'
import Socket from '../../../sockets/socket'
import DoubleBButton from '../Buttons/DoubleBButton'
import '../../../styles/Auth.css'
import Label from '../Label/Label'

const FormForMsg = ({useGroup}) => {
    const Socket = useContext(SocketContext)
    const [msg, setMsg] = useState(null)
    const [classInput, setClassInput] = useState()

    function sendMsg(e){
        e.preventDefault()
        Socket.sendMsg(useGroup, localStorage.getItem('username'), msg)
        setMsg('')
    }
    function setMessage(e){
        setMsg(e.target.value)
        if(e.target.value.length != 0){
            setClassInput('white')
        }else{
            setClassInput('')
        }
    }

    return (
        <form id="fancy-inputs">
            <Label>
                <input className={classInput} value={msg} onChange={(e)=> setMessage(e)} type='text'/>
                <span><span>Msg...</span></span>
            </Label>
            <DoubleBButton onClick={(e)=>sendMsg(e)}>Send</DoubleBButton>
        </form>
    )
}

export default FormForMsg
