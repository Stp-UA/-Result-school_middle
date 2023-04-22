import { RefObject, useState, useRef, useLayoutEffect, useEffect } from 'react'

interface IOut<T> {
    hovered: boolean,
    ref: RefObject<T>
}

function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void,
>(
  eventName: K,
  handler: (
    event: HTMLElementEventMap[K] | Event,
  ) => void,

  element: RefObject<T>,
) {
  const savedHandler = useRef(handler)

  useLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const targetElement = element.current
    if (!(targetElement && targetElement.addEventListener)) return
    const listener: typeof handler = event => savedHandler.current(event)
    targetElement.addEventListener(eventName, listener)
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
