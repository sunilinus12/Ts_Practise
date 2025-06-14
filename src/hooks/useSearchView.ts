import { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { SearchQueryAction } from "../redux/actions/FetchAction";
import _ from "lodash";
import { setField, setList, setNoResult } from "../redux/reducers/SearchReducer";

const useSearchView = () => {
  const state = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();

  // 🔁 Store the last dispatched thunk's promise
  const ongoingPromiseRef = useRef<any>(null);

  const fetchQuery = useCallback(
    async (e: string) => {
      if (ongoingPromiseRef.current) {
        ongoingPromiseRef.current.abort(); // cancel previous
      }

      const promise = dispatch(SearchQueryAction(e));
      ongoingPromiseRef.current = promise;
    },
    [dispatch]
  );

  const debouncedHandle = useMemo(
    () => _.debounce((e: string) => fetchQuery(e), 500),
    [fetchQuery]
  );

  useEffect(() => {
    return () => {
      if (ongoingPromiseRef.current) {
        ongoingPromiseRef.current.abort(); // cancel on unmount
        console.log("Cleaning up ongoing promise");

      }
      debouncedHandle.cancel();
    };
  }, [debouncedHandle]);

  const handleChangeText = useCallback(
    (e: string) => {
      dispatch(setField(e));
      if (e.trim() === "") {
        if (ongoingPromiseRef.current) {
          ongoingPromiseRef.current.abort(); // cancel on unmount
          console.log("Cleaning up ongoing promise");
          dispatch(setList([]));
          dispatch(setNoResult(false));

        }
        debouncedHandle.cancel();
        // dispatch(setNoResult(false));
        console.log("clearing",);

        return;
      }
      debouncedHandle(e);
    },
    [dispatch, debouncedHandle]
  );

  return {
    handleChangeText,
    ...state,
  };
};

export default useSearchView;
