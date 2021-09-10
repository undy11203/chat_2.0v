import React, { useContext, useState } from 'react'
import Input from '../components/UI/Form/Input'
import '../App.css'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

const Auth = () => {
    const [username, setUsername] = useState('')
    const {store} = useContext(Context)

    function submit(e){
        e.preventDefault()
        store.auth(username)
    }

    return (
        <div className='divAuth'>
            <form className='formAuth'>
                <Input onChange={(e)=> setUsername(e.target.value)} placeholder='Username...' type='text'/>
                <button onClick={(e)=> submit(e)}>Войти</button>
            </form>
        </div>
    )
}

export default observer(Auth)
