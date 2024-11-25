"use client"
import { Toast } from 'primereact/toast';
import React, {MutableRefObject, createContext, useRef} from 'react'
interface INotify {
    notify: MutableRefObject<Toast|null> | null
}

export const NotifyContext = createContext<INotify>({
    notify: null
});

const NotifyProvider = ({ children }: {children: React.ReactNode}) => {
    const notify = useRef(null);
    return (
        <NotifyContext.Provider value={ {notify} }>{children}</NotifyContext.Provider>
    );
}

export default NotifyProvider