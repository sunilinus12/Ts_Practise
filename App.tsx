import { StatusBar } from "expo-status-bar";
import { SearchScreen } from "./src/screens";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
          <StatusBar style="auto" />
          <SearchScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
