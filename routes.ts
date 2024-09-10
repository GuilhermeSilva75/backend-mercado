import { Router, Request, Response } from "express";
import { CreateUserController } from "./src/controller/CreateUserController";
import { AuthUserController } from "./src/controller/AuthUserController";


const router = Router()

// ROTAS USERS

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

export { router }