import React, {createContext} from 'react'
import io from 'socket.io-client'
import {WS_BASE} from "../config/config";
import {useDispatch} from "react-redux";
import {updateTicker, updateTickerOld} from "../actions/actions";

const WebSocketContext = createContext(null)
export {WebSocketContext}
const Socket = ({children}) => {
    let socket;
    let ws;
    const dispatch = useDispatch()
    // const getMessage = (message) => {
    //     const payload = {
    //         data: message
    //     }
    // }
    if (!socket) {
        socket = io.connect(WS_BASE)
        socket.emit('start')
        socket.on('ticker', (msg) => {
            const payload = [msg]
            dispatch(updateTicker(payload))
            dispatch(updateTickerOld(payload))
        })

    }
    ws = {
        socket: socket
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}

export default Socket
