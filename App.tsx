import { StatusBar } from "expo-status-bar";
import { CounterScreen, SearchScreen } from "./src/screens";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GlobalContextProvider } from "./src/context/GlobalContext";

export default function App() {
  return (
    <>
      <GlobalContextProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <SearchScreen />
            {/* <CounterScreen /> */}
          </SafeAreaView>
        </SafeAreaProvider>
      </GlobalContextProvider>
    </>
  );
}
