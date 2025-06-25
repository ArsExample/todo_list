import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchTlists = createAsyncThunk("tlists/fetchTlists", async () => {
    const { data } = await axios.get("/tlists");
    return data;
});

const initialState = {
    tlists: {
        items: [],
        status: "loading"
    } // наверное сюда через запятую задачи сделаю
};

const tlistsSlice = createSlice({
    name: "tlists",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchTlists.pending, (state) => {
            state.tlists.status = "loading"
            state.items = null; // мб лучше [] (?)
        });
        builder.addCase(fetchTlists.fulfilled, (state, action) => {
            state.tlists.status = "loaded"
            state.items = action.payload;
        });
        builder.addCase(fetchTlists.rejected, (state) => {
            state.tlists.status = "error"
            state.items = null;
        });
    }
});

export const tlistReducer = tlistsSlice.reducer;