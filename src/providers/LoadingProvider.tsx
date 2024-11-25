"use client"

import React, {createContext, useState} from 'react'

export const LoadingContext = createContext<{
    type: String, 
    setType: React.Dispatch<React.SetStateAction<any>>,
    visible: boolean, 
    setVisible: React.Dispatch<React.SetStateAction<any>>,
    disabled: boolean, 
    setDisabled: React.Dispatch<React.SetStateAction<any>>
}>({
    type: '', 
    setType: (v) => null,
    visible: true,
    setVisible: (v) => null,
    disabled: true,
    setDisabled: (v) => null
})

const LoadingProvider = ({ children }: {children: React.ReactNode}) => {
    const [type, setType] = useState('')
    const [visible, setVisible] = useState(false)
    const [disabled, setDisabled] = useState(false)

    return <LoadingContext.Provider value={{
        type, setType,
        visible, setVisible,
        disabled, setDisabled
    }} >{children}</LoadingContext.Provider>
}

export default LoadingProvider