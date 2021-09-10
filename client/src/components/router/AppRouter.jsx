import React, { useContext, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Context } from '../..'
import { privateRoutes, publicRoutes } from '../../routers'
import { observer } from 'mobx-react-lite'

const AppRouter = () => {
    const {store} = useContext(Context)
    useEffect(()=>{
        store.checkAuth()
        console.log(store.user)
    }, [])

    return (
        store.isAuth
        ?
        <Switch>
            {privateRoutes.map((route)=>
                <Route 
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Redirect to='/chat'/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map((route)=>
                <Route 
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Redirect to='/auth'/>
        </Switch>
    )
}

export default observer(AppRouter)
