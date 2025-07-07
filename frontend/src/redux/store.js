import {configureStore} from "@reduxjs/toolkit"
import {authReducer} from "./slices/auth"
import {tlistReducer} from "./slices/tlists"
import {tasksReducer} from "./slices/tasks"

const store = configureStore({
    reducer: {
        auth: authReducer,
        tlists: tlistReducer,
        tasks: tasksReducer,
    },
});

export default store;