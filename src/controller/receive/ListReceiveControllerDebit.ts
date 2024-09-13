import { Response, Request } from "express";
import { ListReceiveDebitService } from "../../services/receive/ListReceiveDebitService";

class ListReceiveDebitController {
    async handle(request: Request, response: Response) {
        const user_id = request.user_id
        const type = request.query.type as string

        const listReceiveDebitService = new ListReceiveDebitService()

        const debit = await listReceiveDebitService.execute({
            type,
            user_id
        })

        return response.json(debit)
    }
}

export { ListReceiveDebitController }