import { TextInputProps as RNTextInputProps } from "react-native";
export interface buttonProps {
    text: string;
    onClick?: () => void;
}

export interface Book {
    author: string,
    bookName: string,
}
export interface TextInputProps extends RNTextInputProps {
    placeholder?: string,
    value?: string,
    onChangeText?: (e: string) => void,
}


export interface ListItemProps {
    SEARCHVAL?: string,
    ADDRESS?: string
}
