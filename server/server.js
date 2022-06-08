import express from "express";
import { middleware } from "./middleware/middleware.js";
const app = express()



app.use(express.json())

middleware(app)

app.listen(3000, () => console.log("servidor online"))