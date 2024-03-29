import React,{createContext, useContext, useMemo} from "react";
import io from 'socket.io-client'
const SocketContext = createContext(null);

//made shortcut for calling socket everywhere

export const useSocket = () =>{
    const socket = useContext(SocketContext);
    return socket;
}

export const SocketProvider = (props) =>{

    //so it cant initilized again n again
    const socket = useMemo(() => io("localhost:3001"),[])
    return(
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}