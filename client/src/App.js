import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppRouter from './components/router/AppRouter';
import { Context } from '.';



function App() {
    const {store} = useContext(Context)

    return ( 
		<BrowserRouter >
        	<AppRouter />
        </BrowserRouter>
    );
}

export default App;