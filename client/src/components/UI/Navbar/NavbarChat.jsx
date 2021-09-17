import React, { useContext } from 'react'
import { SocketContext } from '../../..'
import { groupRoutes } from '../../../routers'
import Socket from '../../../sockets/socket'
import DoubleBButton from '../Buttons/DoubleBButton'

const NavbarChat = ({useGroup, setUseGroup, ...props}) => {
    const Socket = useContext(SocketContext)

    function selectGroup(group, user){
        if( useGroup != null){
            Socket.leaveGroup(useGroup, user)
        }
        Socket.joinGroup(group, user)
        setUseGroup(group)
    }

    return (
        <div {...props}>
            <p style={{'color':'gold','fontSize':'25px','fontFamily':'monospace','marginBottom':'0'}}>Select group</p>
            {groupRoutes.map((route)=>
                <DoubleBButton 
                    onClick={()=> selectGroup(route.name, localStorage.getItem("username"))}
                >
                    {route.name}
                </DoubleBButton>
            )}
        </div>
    )
}

export default NavbarChat
