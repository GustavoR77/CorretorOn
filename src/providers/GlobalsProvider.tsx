"use client"

import React, {createContext, useState} from 'react'

export const GlobalsContext = createContext<{
    headerTheme: string | undefined, 
    setHeaderTheme: React.Dispatch<React.SetStateAction<any>>,
}>({
    headerTheme: '', 
    setHeaderTheme: () => null,
})

const GlobalsProvider = ({ children }: {children: React.ReactNode}) => {
    const [headerTheme, setHeaderTheme] = useState()

    return <GlobalsContext.Provider value={{
        headerTheme, setHeaderTheme
    }}>{children}</GlobalsContext.Provider>
}

export default GlobalsProvider