import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { TextInputProps } from "../interfaces";

const CustomInput: React.FC<TextInputProps> = (props) => {
  const {
    placeholder = "Enter Here !!",
    value = "",
    onChangeText = () => {},
    numberOfLines = 1,
    ...rest
  } = props;
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textField}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textField: {
    borderWidth: 0.5,
    maxWidth: "50%",
    minWidth: "50%",
    borderRadius: 5,
    textDecorationLine: "none",
  },
});
