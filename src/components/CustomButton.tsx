import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { buttonProps } from "../interfaces";

const CustomButton: React.FC<buttonProps> = (props) => {
  return <Button title={props.text} onPress={props.onClick} />;
};

const styles = StyleSheet.create({});

export default CustomButton;
