import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
import { useCounterViewModel } from "../hooks";

export const GlobalContext = createContext<any>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};
export const GlobalContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const { handleDecrement, handleIncrement, value } = useCounterViewModel();
  return (
    <GlobalContext.Provider
      value={{
        handleDecrement,
        handleIncrement,
        value,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
