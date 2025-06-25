import {configureStore} from "@reduxjs/toolkit"
import {authReducer} from "./slices/auth"
import {tlistReducer} from "./slices/tlists"

const store = configureStore({
    reducer: {
        auth: authReducer,
        tlists: tlistReducer,
    },
});

export default store;