import { prismaClient } from "../../prisma";

interface ListRequest {
    user_id: string
    type: string
}

class ListReceiveDebitService {
    async execute({ type, user_id }: ListRequest) {
        const debit = await prismaClient.receive.findMany({
            where: {
                user_id: user_id,
                type: type
            },
            orderBy: {
                created_at: 'desc'
            }
        }) 

        return debit
    }
}

export { ListReceiveDebitService }