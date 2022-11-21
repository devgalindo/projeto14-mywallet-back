import { Router } from "express";
import { getMovements, postMoviments } from "../controllers/userController.js"

const authRouter = Router()

authRouter.get("/transactions", getMovements)
authRouter.post("/transactions", postMoviments)

export default authRouter