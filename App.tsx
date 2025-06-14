import { StatusBar } from "expo-status-bar";
import { CounterScreen, SearchScreen } from "./src/screens";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GlobalContextProvider } from "./src/context/GlobalContext";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      {/* <GlobalContextProvider> */}
      <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <SearchScreen />
            {/* <CounterScreen /> */}
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
      {/* </GlobalContextProvider> */}
    </>
  );
}
