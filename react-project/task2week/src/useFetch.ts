import { useEffect, useReducer, useRef, useState } from 'react'
import axios from 'axios'
import { AxiosRequestConfig } from 'axios'

interface State<T> {
    data: T | undefined,
    isLoading: boolean,
    error: Error | undefined
}

interface Answer<T> extends State<T> {
    refetch: (prop: AxiosRequestConfig) => void
}

type Action<T> =
  { type: 'loading' } |
  { type: 'fetched'; payload: T } |
  { type: 'error'; payload: Error }

export function useFetch<T>(url: string, props: AxiosRequestConfig = {}): Answer<T> {
    console.log('==============================######## useFetch ##########')
    console.log(props)
    if (!(url in props)) {props.url=url}
    console.log(props)
    const [options, setOptions] = useState(props)

    const cancelRequest = useRef<boolean>(false)

    const initState: State<T> = {
        data: undefined,
        isLoading: false,
        error: undefined,
    }

    const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
        switch (action.type) {
            case 'loading':
                return { ...initState, isLoading: true }
            case 'fetched':
                return { ...initState, data: action.payload, isLoading: false }
            case 'error':
                return { ...initState, error: action.payload, isLoading: false }
            default:
                return state
        }
    }

    const refetch = (prop: AxiosRequestConfig): void => {
        console.log('----- refetch -------')
        setOptions((prev)=>Object.assign(prev, prop))
        console.log(options)
    }

    const [state, dispatch] = useReducer(fetchReducer, initState)

    console.log('----- перед useEffect -------')
    console.log(options)


    useEffect(() => {
        console.log('####### useEffect ########')
        cancelRequest.current = false;

        ( async function () {
            dispatch({ type: 'loading' })

            try {
                console.log('------- axios ------------')
                const response = await axios(options)
                const data = response.data as T

                if (cancelRequest.current) return

                dispatch({ type: 'fetched', payload: data })
            } catch (error) {
                console.log('====== Error ============')
                console.log(error)
                if (cancelRequest.current) return

                dispatch({ type: 'error', payload: error as Error })
            }
        })()

        // fetchData()

        return () => {
            cancelRequest.current = true
        }
    }, [options])

    return { ...state, refetch }
}
