import { Keyboard } from "react-native";

export const handleKeyboard = () => {
  Keyboard.dismiss();
};
export const capitalizeEachWord = (text: string) =>
  text
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
