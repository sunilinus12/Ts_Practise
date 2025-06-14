import { FlatList, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { InputField, ListCard, LoadingIndicator } from "../components";
import { useSearchView } from "../hooks";
import { ListItemProps } from "../interfaces";

const SearchScreen: React.FC = () => {
  const { handleChangeText, field, list, loading, error, noResult } =
    useSearchView();

  const renderItem = useCallback(
    ({ item }: { item: ListItemProps }) => (
      <ListCard ADDRESS={item.ADDRESS} SEARCHVAL={item.SEARCHVAL} />
    ),
    []
  );

  const keyExtractor = useCallback(
    (item: ListItemProps, index: number) => index.toString(),
    []
  );

  const renderListEmptyComponent = useCallback(() => {
    if (noResult) {
      return <Text>No Results Found</Text>;
    }
    return null;
  }, [noResult]);
  return (
    <KeyboardAvoidingView style={[styles.container]}
      behavior="padding"
      >
      <InputField
        placeholder="Please Type Here"
        value={field}
        onChangeText={handleChangeText}
        numberOfLines={1}
        style={styles.textField}
      />
      {error ? (
        <Text>{error}</Text>
      ) : !loading ? (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderListEmptyComponent}
        />
      ) : (
        <LoadingIndicator />
      )}
    </KeyboardAvoidingView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    alignItems: "center",
  },
  textField: {
    width: "90%",
    maxWidth: "100%",
  },
});
