import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import axios from "../../axios"

export const patchTask = createAsyncThunk("tasks/patchTask", async (params) => { // params -> tlistId (+), taskId (+), taskName, taskCompleted (+)
    const { data } = await axios.patch(`/tlists/${params.tlistId}/${params.taskId}`,
    {
        task_name: params.taskName, 
        task_completed: params.taskCompleted
    });
    return data;
    
});

const initialState = {
  tasks: [], // блять ну и нахуй я еще 1 слайс сделал
  tlistId: "", 
  tlistname: "",
  status: "initialStatus",
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: { // обычный reducer типа канон
        updateTasks: (state, action) => {
            state.tasks = action.payload.tasks;
            state.tlistId = action.payload.tasklistId;
            state.tlistname = action.payload.tasklistname;
        },
        prepare(tasks, tasklistId, tasklistname) { // o_0 ))))))))))))))))))))))))))))))
            return{
                payload: {
                    tasks,
                    tasklistId,
                    tasklistname,
                },
            };
        },
    },
    extraReducers: builder => { // extraReducer типа подтягиваю с бека ()
        builder.addCase(patchTask.pending, (state) => {
            state.status = "loading"  // при лоадинге и ошибке ниче не меняем (наверное)
        });
        builder.addCase(patchTask.fulfilled, (state, action) => {
            state.status = "loaded"
            state.tasks = action.payload.tlist.tasks;
            state.tlistId = action.payload.tlist._id;
            state.tlistname = action.payload.tlist.name;
        });
        builder.addCase(patchTask.rejected, (state) => {
            state.status = "error"
        });
    }
});

export const { updateTasks } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;