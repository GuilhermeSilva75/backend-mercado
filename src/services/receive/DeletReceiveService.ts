import { prismaClient } from "../../prisma";

interface DeleteRequest {
    item_id: string
    user_id: string
}

class DeletReceiveService {
    async execute({ item_id, user_id }: DeleteRequest){

        const receive = await prismaClient.receive.findFirst({
          where:{
            id: item_id
          }
        })
    
        await prismaClient.receive.delete({
          where:{
            id: item_id
          }
        })
    
    
        const findUser = await prismaClient.user.findFirst({
          where:{
            id: user_id,
          }
        })

        const valueUpdated = receive.type === 'debito' ? findUser.balance += receive.value : findUser.balance -= receive.value

        const updateUser = await prismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                balance: valueUpdated
            }
        })
    
        return { status: 'updated'}
    
       
      }
}

export { DeletReceiveService }