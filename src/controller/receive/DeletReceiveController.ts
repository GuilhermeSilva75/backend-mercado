import { Request, Response } from "express";
import { DeletReceiveService } from "../../services/receive/DeletReceiveService";

class DeletReceiveController {
    async handle(request: Request, response: Response) {

        const user_id = request.user_id;
        const item_id = request.query.item_id as string;

        const deleteReceiveService = new DeletReceiveService();

        const deleteItem = await deleteReceiveService.execute({
            item_id,
            user_id,
        })

        return response.json(deleteItem);


    }
}
export { DeletReceiveController }