import { useEffect, useState } from 'react'

interface ViewportSize {
  width: number,
  height: number
}

function getViewportSize(): ViewportSize {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

export function useViewportSize(): ViewportSize {
    let [size, setSize] = useState(() => getViewportSize())

    useEffect(() => {
        const onResize = () => {
            setSize(size => {
                let newSize = getViewportSize()
                if (newSize.width === size.width && newSize.height === size.height) {
                    return size
                }
                return newSize
            });
        };

        window.addEventListener('resize', onResize)

        return () => { window.removeEventListener('resize', onResize) }
    }, [])

    return size
}
