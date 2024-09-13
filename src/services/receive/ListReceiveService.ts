import { prismaClient } from "../../prisma";

interface ListRequest {
    user_id: string
    date: string
}

class ListReceiveService {
    async execute({ user_id, date }: ListRequest) {
        const receives = await prismaClient.receive.findMany({
            where: {
                user_id: user_id,
                date: date
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return receives
    }
}

export { ListReceiveService }