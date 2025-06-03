import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { InputField } from "../components";
import { useSearchView } from "../hooks";

const SearchScreen: React.FC = () => {
  const { handleChangeText, field, setField } = useSearchView();
  return (
    <View style={styles.container}>
      <InputField
        placeholder="Please Type Here"
        value={field}
        onChangeText={handleChangeText}
        numberOfLines={1}
      />
      <Text>{field}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
});
