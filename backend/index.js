import express from "express";
import mongoose from "mongoose"
import "dotenv/config"

import {registerValidation} from "./validations/auth.js"
import checkAuth from "./middlewares/checkAuth.js";
import * as UserController from "./controllers/UserController.js"


mongoose.connect(process.env.DATABASE).then(() => {
    console.log("DB connected")
}).catch((err) => console.log("DB error:", err));

const app = express();

app.use(express.json());

app.post("/auth/login", UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("Server OK");
});