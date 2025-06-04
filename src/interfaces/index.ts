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

export interface InitialStateProps {
    loading: boolean,
    list: object[],
    field: string,
    error: null | string,
    noResult?: boolean

}

export type Action =
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_LIST'; payload: object[] }
    | { type: 'SET_FIELD'; payload: string }
    | { type: 'SET_ERROR'; payload: string | null }
    | { type: "SET_NORESULT"; payload: boolean };
