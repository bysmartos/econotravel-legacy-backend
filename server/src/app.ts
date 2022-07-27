import express, { Request, Response } from "express";
import { experienciasRoute, userRoute, reservasRoute } from "./route";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
//app.use(encryptPassword);
app.use(express.urlencoded({ extended: false }));

app.use(experienciasRoute);
app.use(userRoute);
app.use(reservasRoute);

app.get("/", (req: Request, res: Response) => {
  res.json("hello world");
});

export default app;
