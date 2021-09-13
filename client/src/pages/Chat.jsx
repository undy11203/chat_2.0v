import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context, SocketContext } from '..'
import FormForMsg from '../components/UI/Form/FormForMsg'
import NavbarChat from '../components/UI/Navbar/NavbarChat'
import { groupRoutes } from '../routers'

const Chat = () => {
    const {store} = useContext(Context)
    const Socket = useContext(SocketContext)
    const [useGroup, setUseGroup] = useState(null)
    
    
    useEffect(()=>{
        Socket.joinMsg()
        Socket.getMsg()
    }, [])
    

    
    

    return (
        <div>
           <NavbarChat useGroup={useGroup} setUseGroup={setUseGroup} />
            <div className="Chat">
                <ul className='chatList'>
                    {/* Тут будут сообщения */}
                </ul>
            </div>
            <div>
                <FormForMsg useGroup={useGroup}/>
            </div>
            <button style={{"position":"absolute", "right":5}} onClick={()=> store.logout(localStorage.getItem('username'))}>Выйти</button>
        </div>
    )
}

export default observer(Chat)
