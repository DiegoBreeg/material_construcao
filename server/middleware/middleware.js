import express from "express"
import { route } from "../routes/routes.js"
import path from "path"


function middleware(app) {
    
app.use(express.static(path.join(path.resolve(), "server", "view")))
app.use(route)
console.log(path.join(path.resolve(), "./", "/view"))

}

export { middleware }