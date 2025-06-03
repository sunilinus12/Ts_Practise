import { Keyboard } from "react-native";

export const handleKeyboard = () => {
  Keyboard.dismiss();
};
export const capitalizeEachWord = (text: string) =>
  text
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
