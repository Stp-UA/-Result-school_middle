import { useEffect, useState } from 'react';

interface State {
  x: number,
  y: number
}

interface StateScroll {
    x?: number,
    y?: number
  }

export function useWindowScroll(): [State, (params: StateScroll)=>void] {
    const [state, setState] = useState<State>(() => ({
        x: window.pageXOffset,
        y: window.pageYOffset
    }));

    function scrollTo(params: StateScroll): void {
        let x: number, y:number
        'x' in params ? x = params.x as number : x = state.x
        'y' in params ? y = params.y as number : y = state.y
        window.scrollTo(x, y)
    }

    useEffect(() => {
        const handler = () => {
            setState((state) => {
                const { pageXOffset, pageYOffset } = window

                return state.x !== pageXOffset || state.y !== pageYOffset
                    ? {
                        x: pageXOffset,
                        y: pageYOffset
                    }
                    : state
            });
        };

        handler();

        window.addEventListener('scroll', handler, {
            capture: false,
            passive: true
        });

        return () => { window.removeEventListener('scroll', handler) }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [state, scrollTo]
};
