import React from 'react'
import '../styles/UsersList.css'

const UsersList = ({useGroup}) => {
    return (
        <div className='users'>
            <div style={{'color':'gold'}}>User in {useGroup ? useGroup : "no group"}</div>
            <ul className='userInRoomList' style={{'color':'gold'}}>
                {/* тут будут юзеры */}
            </ul>
        </div>
    )
}

export default UsersList
