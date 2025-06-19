import express from "express";
import mongoose from "mongoose"
import "dotenv/config"

import * as Validations from "./validations.js"
import checkAuth from "./middlewares/checkAuth.js";
import * as UserController from "./controllers/UserController.js"
import * as TListController from "./controllers/TListController.js"


mongoose.connect(process.env.DATABASE).then(() => {
    console.log("DB connected")
}).catch((err) => console.log("DB error:", err));

const app = express();

app.use(express.json());

app.post("/auth/login", Validations.loginValidation, UserController.login);
app.post("/auth/register", Validations.registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/tlists", checkAuth, TListController.getAll);
app.post("/tlists", checkAuth, Validations.tListCreateValidation, TListController.create);
app.get("/tlists/:id", checkAuth, TListController.getOne);

app.get("/testlists", TListController.testGetAll)

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("Server OK");
});