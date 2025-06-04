import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SearchQuery } from "../api";
import axios, { CancelTokenSource } from "axios";
import _ from "lodash";

const useSearchView = () => {
  const [field, setField] = useState<string>('');
  const [list, setList] = useState<object[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);
  const fetchQuery = useCallback(async (e: string) => {
    try {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel("Canceled due to new request");
      }
      cancelTokenRef.current = axios.CancelToken.source();
      setLoading(true);
      const resp = await SearchQuery(e, cancelTokenRef.current.token);
      if (resp.results && resp.results.length > 0) {
        setList(resp.results)
      } else {
        setList([])
      }
    } catch (error) {
      console.error("Errr fetchQuery", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false)
    }
  }, [])
  const debouncedHandle = useMemo(() => _.debounce((e) => fetchQuery(e), 500), [fetchQuery]);

  useEffect(() => {
    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel();
      }
      debouncedHandle.cancel()
    }
  }, [debouncedHandle])


  const handleChangeText = useCallback(async (e: string) => {
    setField(e);
    if (e?.trim() == "") {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Canceled due to new request')
      }
      debouncedHandle.cancel()
      console.log("cleared handled");
      return setList([])
    }
    debouncedHandle(e)
  }, []);


  return {
    handleChangeText,
    field,
    setField,
    list, setList,
    loading, setLoading,
    error, setError
  };
};
export default useSearchView;
