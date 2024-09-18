import express, { Request, Response, NextFunction, json } from "express";
import { router } from "./routes";
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

app.listen(3333, () => console.log("SERVER ONLINE!"))