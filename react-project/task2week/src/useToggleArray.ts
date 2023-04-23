import { useState } from "react";

export function useToggleArray(stringArray: string[]): [string, (value?: string) => void] {

    const [key, setKey] = useState(0)
    function switchToggle(value?: string) {
        if (value) {
            setKey(stringArray.indexOf(value))
        } else {
            key === stringArray.length-1 ? setKey(0) : setKey(key + 1)
        }

    }

    return [stringArray[key], switchToggle]
}
