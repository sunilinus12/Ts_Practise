import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItemProps } from "../interfaces";
import { capitalizeEachWord } from "../utils";

const ListCard: React.FC<ListItemProps> = ({ SEARCHVAL, ADDRESS }) => {
  return (
    <View style={styles.card}>
      {SEARCHVAL && (
        <Text style={styles.title}>{capitalizeEachWord(SEARCHVAL)}</Text>
      )}
      {ADDRESS && (
        <Text style={styles.subtitle}>{capitalizeEachWord(ADDRESS)}</Text>
      )}
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "92%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textTransform: "capitalize",
  },
});
