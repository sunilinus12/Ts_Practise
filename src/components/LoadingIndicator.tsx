import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoadingIndicator: React.FC = () => {
  return (
    <View style={styles.outerContainer}>
      <ActivityIndicator
        style={styles.container}
        color={"black"}
        size={"large"}
      />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  outerContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
});
