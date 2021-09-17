import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context, SocketContext } from '..'
import DoubleBButton from '../components/UI/Buttons/DoubleBButton'
import RedDoubleButton from '../components/UI/Buttons/RedDoubleButton'
import FormForMsg from '../components/UI/Form/FormForMsg'
import NavbarChat from '../components/UI/Navbar/NavbarChat'
import { groupRoutes } from '../routers'
import '../styles/Chat.css'

const Chat = () => {
    const {store} = useContext(Context)
    const Socket = useContext(SocketContext)
    const [useGroup, setUseGroup] = useState(null)
    const refScroll = useRef(null)
    
    useEffect(()=>{
        Socket.joinMsg()
        Socket.getMsg()
        Socket.getUser()
    }, [])  
    useEffect(()=>{
        refScroll.current.scrollIntoView(false)
        console.log(refScroll)
    },[refScroll.current])  

    return (
        <div className="Chat">
           <NavbarChat className='NavbarChat' useGroup={useGroup} setUseGroup={setUseGroup} />
            <div className="ChatPole">
                <ul ref={refScroll}  className='chatList'>
                    {/* Тут будут сообщения */}
                </ul>
                <div className='formForMsg'>
                    <FormForMsg useGroup={useGroup}/>
                </div>
            </div>
            
            <div>
                <div style={{'color':'gold'}}>User in {useGroup}</div>
                <ul className='userInRoomList'>

                </ul>
            </div>
            <RedDoubleButton style={{"position":"absolute", "right":5, "top": -16}} onClick={()=> store.logout(localStorage.getItem('username'))}>Выйти</RedDoubleButton>
        </div>
    )
}

export default observer(Chat)
