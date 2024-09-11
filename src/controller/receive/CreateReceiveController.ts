import { Request, Response } from "express";
import { CreateReceiveService } from "../../services/receive/CreateReceiveService";

class CreateReceiveController {
    async handle(request: Request, response: Response) {
        const user_id = request.user_id
        
        const { description, value, date, type } = request.body

        const createReceiveService = new CreateReceiveService()

        const user = await createReceiveService.execute({
            description,
            date,
            type,
            user_id,
            value
        })

        return response.json(user)

    }
}

export { CreateReceiveController }