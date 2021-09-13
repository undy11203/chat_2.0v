import React, { useContext } from 'react'
import { SocketContext } from '../../..'
import { groupRoutes } from '../../../routers'
import Socket from '../../../sockets/socket'

const NavbarChat = ({useGroup, setUseGroup}) => {
    const Socket = useContext(SocketContext)

    function selectGroup(group, user){
        if( useGroup != null){
            Socket.leaveGroup(useGroup, user)
        }
        Socket.joinGroup(group, user)
        setUseGroup(group)
    }

    return (
        <div className='Navbar'>
            {groupRoutes.map((route)=>
                <button 
                    onClick={()=> selectGroup(route.name, localStorage.getItem("username"))}
                >
                    {route.name}
                </button>
            )}
        </div>
    )
}

export default NavbarChat
