import { createContext } from "react";
import React from 'react'

const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [query, setQuery] = useState('');

    return (
        <GlobalContext.Provider value={{ query, setQuery }}>  {/*Se comparten query y setQuery, porque ambos valores son compartidos como props en App.js */}
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;


