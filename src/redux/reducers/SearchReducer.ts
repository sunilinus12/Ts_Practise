import { createSlice } from "@reduxjs/toolkit";
import { InitialStateProps } from "../../interfaces";
import { SearchQueryAction } from "../actions/FetchAction";
import { set } from "lodash";


const initialState: InitialStateProps = {
    loading: false,
    list: [],
    field: "",
    error: null,
    noResult: false
}
const SearchReducer = createSlice({
    name: "search",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setList: (state, action) => {
            state.list = action.payload;
        },
        setField: (state, action) => {
            state.field = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setNoResult: (state, action) => {
            state.noResult = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(SearchQueryAction.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.noResult = false;
        })
        builder.addCase(SearchQueryAction.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload.results;
            state.noResult = action.payload.results.length === 0;
        })
        builder.addCase(SearchQueryAction.rejected, (state, action) => {
        
            state.loading = false;
            state.error = action.error.message || "An error occurred";
            state.noResult = false;
            state.list = [];
        })
    }
})

export const { setLoading, setList, setField, setError, setNoResult } = SearchReducer.actions;
// Export the reducer to be used in the store
export default SearchReducer.reducer;