import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCounterViewModel } from "../hooks";
import { Button } from "../components";
import { GlobalContext } from "../context/GlobalContext";

const CounterScreen: React.FC = () => {
  const { handleDecrement, handleIncrement, value } = useCounterViewModel();
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <View style={styles.childContainer}>
        <Button text="Increament" onClick={handleIncrement} />
        <Button text="Decreament" onClick={handleDecrement} />
      </View>
    </View>
  );
};

export default CounterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  childContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
