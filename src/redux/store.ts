import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducers/CounterReducer";
import SearchReducer from "./reducers/SearchReducer";
export const store = configureStore({
    reducer: {
        "counter": CounterReducer,
        "search": SearchReducer
    }
}
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;