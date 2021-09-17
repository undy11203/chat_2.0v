import React, { useContext, useEffect, useState } from 'react'
import Input from '../components/UI/Form/Input'
import '../styles/Auth.css'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import DoubleBButton from '../components/UI/Buttons/DoubleBButton'
import Label from '../components/UI/Label/Label'

const Auth = () => {
    const [username, setUsername] = useState('')
    const [classInput, setClassInput] = useState('')
    const {store} = useContext(Context)

    function setUser(e){
        setUsername(e.target.value)
        if(e.target.value.length != 0){
            setClassInput('white')
        }else{
            setClassInput('')
        }
    }

    function submit(e){
        e.preventDefault()
        store.auth(username)
    }
    
    

    return (
        <div className='divAuth'>
            <form>
                <Label>
                    <input className={classInput} onChange={(e)=> setUser(e)} type='text' />
                    <span><span>Username</span></span>
                </Label>
                <DoubleBButton style={{'width': "460px"}} onClick={(e)=> submit(e)}>Войти</DoubleBButton>
            </form>
            <form className='formAuth'>
                
            </form>
        </div>
    )
}

export default observer(Auth)
