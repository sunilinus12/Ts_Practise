import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { SearchQuery } from "../api";
import axios, { CancelTokenSource } from "axios";
import _ from "lodash";
import { Action, InitialStateProps } from "../interfaces";

const initialState: InitialStateProps = {
  loading: false,
  list: [],
  field: "",
  error: null,
  noResult: false
};
const reducer = (
  state: InitialStateProps,
  action: Action
): InitialStateProps => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_FIELD":
      return { ...state, loading: false, field: action.payload };
    case "SET_LIST":
      return { ...state, loading: false, list: action.payload };
    case "SET_NORESULT":
      return { ...state, noResult: action.payload }
    default:
      return state;
  }
};

const useSearchView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);
  const fetchQuery = useCallback(async (e: string) => {
    try {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel("Canceled due to new request");
      }
     
      cancelTokenRef.current = axios.CancelToken.source();
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_NORESULT", payload: false })
      const resp = await SearchQuery(e, cancelTokenRef.current.token);
      if (resp.results && resp.results.length > 0) {
        dispatch({ type: "SET_LIST", payload: resp.results });
      } else {
        dispatch({ type: "SET_NORESULT", payload: true })
      }
      
    } catch (error) {
      console.error("Errr fetchQuery", error);
      if (error instanceof Error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      } else {
        dispatch({ type: "SET_ERROR", payload: "Something went wrong." });
      }
      dispatch({ type: "SET_NORESULT", payload: false })
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, []);
  const debouncedHandle = useMemo(
    () => _.debounce((e) => fetchQuery(e), 500),
    [fetchQuery]
  );

  useEffect(() => {
    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel();
      }
      debouncedHandle.cancel();
    };
  }, [debouncedHandle]);

  const handleChangeText = useCallback(async (e: string) => {
    dispatch({ type: "SET_FIELD", payload: e });
    if (e?.trim() == "") {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel("Canceled due to new request");
      }
      debouncedHandle.cancel();
      dispatch({ type: "SET_NORESULT", payload: false })
      return dispatch({ type: "SET_LIST", payload: [] });
    }
    debouncedHandle(e);
  }, []);

  return {
    handleChangeText,
    ...state,
  };
};
export default useSearchView;
