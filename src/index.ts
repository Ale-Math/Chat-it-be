import express from "express";
import cors from "cors"
import 'dotenv/config';
import { userRouter } from "./routes/userRoute";
import { adminRouter } from "./routes/adminRoute";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/docs", adminRouter);
app.use("/api/docs", userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})