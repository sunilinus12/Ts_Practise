import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./src/components";
import { useState } from "react";
import { Book } from "./src/interfaces";

export default function App() {
  const [value, setValue] = useState<number>(0);
  const [book, setBook] = useState<Book>({ author: "no author", bookName: "" });
  return (
    <View style={styles.container}>
      <Text>counter {value}</Text>
      <Text>{book.author}</Text>
      <StatusBar style="auto" />
      <Button
        onClick={() => {
          setValue((e) => e + 1);
        }}
        text={"Increament"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
