
import {useState} from "react";

const ComponentMounted = () => {
    const [_mounted, setMounted] = useState(false)
    const mounted = (callback: () => {}) => {
        if (!_mounted) {
            setMounted(true)
            if (typeof callback === 'function')  return callback()
        }
    }

    const unMounted = (callback: () => {}) => {
        if (_mounted) {
            setMounted(false)
            if (typeof callback === 'function') return callback()
        }
    }

    return {mounted, unMounted}
}

export default ComponentMounted