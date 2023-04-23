import { useState, useEffect } from 'react';

interface IFuncToken {
    setItem: (prop: string) => void,
    removeItem: () => void
}

function getValueStorage(key: string, initialValue: string): string {
    const value: string | null = localStorage.getItem(key)

    if (value) {
        return JSON.parse(value)
    }

    return initialValue
}

export function useLocalStorage(key: string) {
    const [value, setValue] = useState(() => getValueStorage(key, ''))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const funcToken: IFuncToken = {
        setItem(prop) {
            setValue(prop)
        },
        removeItem() {
            setValue('')
        },
    }

    return [value, funcToken] as [string, IFuncToken]
}
