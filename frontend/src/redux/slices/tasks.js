import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tasks: [], // блять ну и нахуй я еще 1 слайс сделал
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {  // и схуев у меня везде extraReducers а тут обычный
        // я хуею мне ж еще тут мб разные редьюсеры делать придется (типа на добавление таска)
        // надеюсь все с бека подтянется
        updateTasks: (state, action) => {
            state.tasks = action.payload;
        },
    },
});

export const { updateTasks } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;