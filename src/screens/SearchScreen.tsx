import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { InputField, ListCard, LoadingIndicator } from "../components";
import { useSearchView } from "../hooks";
import { ListItemProps } from "../interfaces";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SearchScreen: React.FC = () => {
  const { handleChangeText, field, list, loading, error } = useSearchView();
  const insets = useSafeAreaInsets();
  console.log("insetsinsetsinsets", insets);

  const renderItem = useCallback(({ item }: { item: ListItemProps }) => {
    return <ListCard ADDRESS={item.ADDRESS} SEARCHVAL={item.SEARCHVAL} />;
  }, []);
  const keyExtractor = useCallback(
    (item: ListItemProps, index: number) => index.toString(),
    []
  );

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets?.bottom, paddingTop: insets?.top },
      ]}
    >
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
          showsVerticalScrollIndicator={false}
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
    // marginTop: 50,
    alignItems: "center",
  },
  textField: {
    width: "90%",
    maxWidth: "100%",
  },
});
