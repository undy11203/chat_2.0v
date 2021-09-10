import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'

const Chat = () => {
    const {store} = useContext(Context)

    

    return (
        <div>
            <div className='Navbar'>
                <div className='create'><button>Create new</button></div>
            </div>
            <button onClick={()=> store.logout(localStorage.getItem('username'))}>Выйти</button>
        </div>
    )
}

export default observer(Chat)
