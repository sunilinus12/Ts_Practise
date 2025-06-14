import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchQuery } from "../../api";

export const SearchQueryAction = createAsyncThunk("fetchData", async (e: string, thunkAPI) => {
    try {
        const resp = await SearchQuery(e)
        return resp
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error instanceof Error ? error.message : "Something went wrong.")
    }

});