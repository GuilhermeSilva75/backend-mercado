import { Response, Request } from "express";
import { ListReceiveService } from "../../services/receive/ListReceiveService";

class ListReceivesController {
    async handle(request: Request, response: Response) {
        const user_id = request.user_id
        const date = request.query.date as string

        const listReceiveService = new ListReceiveService()

        const revceive = await listReceiveService.execute({
            user_id,
            date
        })

        return response.json(revceive)
    }
}

export { ListReceivesController }