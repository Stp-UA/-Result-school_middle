import { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import { AxiosRequestConfig } from "axios";

interface State<T> {
  data: T | undefined;
  isLoading: boolean;
  error: Error | undefined;
}

interface Answer<T> extends State<T> {
  refetch: (prop: AxiosRequestConfig) => void;
}

type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

export function useFetch<T>(
  url: string,
  props: AxiosRequestConfig = {}
): Answer<T> {
  if (!(url in props)) {
    props.url = url;
  }
  const [options, setOptions] = useState(props);

  const cancelRequest = useRef<boolean>(false);

  const initState: State<T> = {
    data: undefined,
    isLoading: true,
    error: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initState, isLoading: true };
      case "fetched":
        return { ...initState, data: action.payload, isLoading: false };
      case "error":
        return { ...initState, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };

  const refetch = (prop: AxiosRequestConfig): void => {
    setOptions((prev) => Object.assign({}, options, prop));
  };

  const [state, dispatch] = useReducer(fetchReducer, initState);

  useEffect(() => {
    cancelRequest.current = false;

    (async function () {
      dispatch({ type: "loading" });

      try {
        const response = await axios(options);
        const data = response.data as T;

        if (cancelRequest.current) return;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: "error", payload: error as Error });
      }
    })();

    return () => {
      cancelRequest.current = true;
    };
  }, [options]);

  return { ...state, refetch };
}
