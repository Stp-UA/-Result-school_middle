import { RefObject, useState, useRef, useLayoutEffect, useEffect } from 'react'

interface IOut<T> {
    hovered: boolean,
    ref: RefObject<T>
}

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | MediaQueryList | void = void,
>(
  eventName: KW | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | HTMLElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event,
  ) => void,

  element: RefObject<T>,
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler)

  useLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    // Define the listening target
    const targetElement = element.current

    if (!(targetElement && targetElement.addEventListener)) return

    // Create event listener that calls handler function stored in ref
    const listener: typeof handler = event => savedHandler.current(event)

    targetElement.addEventListener(eventName, listener)

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, listener)
    }
  }, [eventName, element])
}

export function useHover<T extends HTMLElement = HTMLDivElement>(initialValue: null = null) {
    const ref = useRef(initialValue)
    const [hovered, setHovered] = useState<boolean>(false)

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    useEventListener('mouseenter', handleMouseEnter, ref)
    useEventListener('mouseleave', handleMouseLeave, ref)

    const out: IOut<T> = {
        hovered,
        ref
    }
    return out
}
