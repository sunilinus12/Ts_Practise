import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { InputField, ListCard, LoadingIndicator } from "../components";
import { useSearchView } from "../hooks";
import { ListItemProps } from "../interfaces";

const SearchScreen: React.FC = () => {
  const { handleChangeText, field, list, loading, error } = useSearchView();

  const renderItem = useCallback(({ item }: { item: ListItemProps }) => {
    return <ListCard ADDRESS={item.ADDRESS} SEARCHVAL={item.SEARCHVAL} />;
  }, []);
  const keyExtractor = useCallback(
    (item: ListItemProps, index: number) => index.toString(),
    []
  );

  return (
    <View style={styles.container}>
      <InputField
        placeholder="Please Type Here"
        value={field}
        onChangeText={handleChangeText}
        numberOfLines={1}
        style={styles.textField}
      />
      {!loading ? (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      ) : (
        <LoadingIndicator />
      )}
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
  textField: {
    width: "90%",
    maxWidth: "100%",
  },
});
