import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchAuth = createAsyncThunk("auth/fetchUserData", async (params) => {  // логин
    const {data} = await axios.post("/auth/login", params);
    return data;
});

export const fetchRegistration = createAsyncThunk("auth/fetchRegData", async (params) => {  // регистрация
    const {data} = await axios.post("/auth/register", params);
    return data;
});

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {  // по токену лутаем данные о пользователе
    const {data} = await axios.get("/auth/me");
    return data;
});

const initialState = {
    data: null,
    status: "loading",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAuth.pending, (state) => {
            state.status = "loading"
            state.data = null;
        });
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.status = "loaded"
            state.data = action.payload;
        });
        builder.addCase(fetchAuth.rejected, (state) => {
            state.status = "error"
            state.data = null;
        });

        builder.addCase(fetchAuthMe.pending, (state) => {
            state.status = "loading"
            state.data = null;
        });
        builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
            state.status = "loaded"
            state.data = action.payload;
        });
        builder.addCase(fetchAuthMe.rejected, (state) => {
            state.status = "error"
            state.data = null;
        });

        builder.addCase(fetchRegistration.pending, (state) => {
            state.status = "loading"
            state.data = null;
        });
        builder.addCase(fetchRegistration.fulfilled, (state, action) => {
            state.status = "loaded"
            state.data = action.payload;
        });
        builder.addCase(fetchRegistration.rejected, (state) => {
            state.status = "error"
            state.data = null;
        });

    }
});

export const selectIsAuth = state => Boolean(state.auth.data);  // селектор который возвращает авторизован ли пользователь

export const authReducer = authSlice.reducer;