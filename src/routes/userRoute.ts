import express, { Request, Response } from "express";
import { userSigninSchema, userSignupSchema } from "../types/userSchema";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken"



export const userRouter = express.Router();

userRouter.post("/signup", async (req: Request, res: Response) => {

    try {
    const data = userSignupSchema.parse(req.body);

    // DB Call to check if user exists

    const hashedPassword = bycrpt.hashSync(data.password, 2);

    // DB call to create user

    const token = jwt.sign(data.email, process.env.JWT_SECRET!)

    res.json({
        token
    })
} catch(e) {
    res.json({
        message: "Enter the correct details"
        })
}
});

userRouter.post("/signin", async (req: Request, res: Response) => {
    try {
    const data = userSigninSchema.parse(req.body);

    // DB call to find user

    const comparePasswords = bycrpt.compareSync(data.password, data.password)
            if (comparePasswords) {
            
            const token = jwt.sign(data.email, process.env.JWT_SECRET!)

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Enter the correct password!"
        })
    } 
                

    } catch(e) {
        res.status(403).json({
            message: "Enter the correct details"
        })
    }
});