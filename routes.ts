import { Router } from "express";
import { CreateUserController } from "./src/controller/user/CreateUserController";
import { AuthUserController } from "./src/controller/user/AuthUserController";
import { CreateReceiveController } from "./src/controller/receive/CreateReceiveController";
import { ListReceivesController } from "./src/controller/receive/ListReceivesController";
import { ListReceiveDebitController } from "./src/controller/receive/ListReceiveControllerDebit";
import { DeletReceiveController } from "./src/controller/receive/DeletReceiveController";
import { isAuthenticated } from "./src/middlewares/isAuthenticated";


const router = Router()

// ROTAS USERS

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

// ROTAS RECEITAS

router.post('/receive', isAuthenticated, new CreateReceiveController().handle)
router.get('/receives', isAuthenticated, new ListReceivesController().handle)
router.get('/debit', isAuthenticated, new ListReceiveDebitController().handle)
router.delete('/delete', isAuthenticated, new DeletReceiveController().handle)

export { router }