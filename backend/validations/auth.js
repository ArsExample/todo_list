import {body} from "express-validator"

export const registerValidation = [
    body("email", "Invalid email").isEmail(),
    body("password", "Password is too short").isLength({min: 5}),
    body("username", "Username is too short").isLength({min: 3}),
    body("avatarUrl", "avatarUrl must be URL").optional().isURL(),
];