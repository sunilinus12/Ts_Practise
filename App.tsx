import { StatusBar } from "expo-status-bar";
import { SearchScreen } from "./src/screens";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <SearchScreen />
      </SafeAreaProvider>
    </>
  );
}
