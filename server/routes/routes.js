import { Router } from "express";
import { user_controller } from "../controller/user_controller.js";
import { pedidos_controller } from "../controller/pedidos_controller.js";

const route = Router()

route.get("/", user_controller.home)
route.post("/user", user_controller.create)
route.post("/purchaseOrder", pedidos_controller.create)

export { route }