import { useCallback, useState } from "react";
import { SearchQuery } from "../api";
import { debounce } from "../utils";

const useSearchView = () => {
  const [field, setField] = useState<string>('');
  const [list, setList] = useState<object[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const fetchQuery = async (e: string) => {
    try {
      setLoading(true);
      const resp = await SearchQuery(e);
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
  }
  const debouncedHandle = debounce((e) => fetchQuery(e), 500);



  const handleChangeText = useCallback((e: string) => {
    setField(e);
    if (e?.trim() == "") {
      setList([])
    }
    if (e?.trim() !== "") {
      debouncedHandle(e)
    }

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
