import { useCallback, useState } from "react";

const useSearchView = () => {
  const [field, setField] = useState<string>('');

  const handleChangeText = useCallback((e: string) => {
    if (e?.trim() !== "") {

    }
    setField(e);
  }, []);


  return {
    handleChangeText,
    field,
    setField,
  };
};
export default useSearchView;
