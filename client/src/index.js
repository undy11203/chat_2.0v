import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store/store';
import {io} from 'socket.io-client'
import Socket from './sockets/socket'


const store = new Store()
export const Context = createContext({ store })

export const SocketContext = createContext(new Socket(io.connect('http://localhost:5001', { autoConnect: true })))





ReactDOM.render(
  <Context.Provider value={{store}}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


