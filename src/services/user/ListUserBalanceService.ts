import { prismaClient } from "../../prisma";

interface ListRequest {
    user_id: string
    date: string
}
interface ItemProp {
    id: string;
    description: string;
    value: number;
    type: string;
    date: string;
    user_id: string;
}

class ListUserBalanceService {
    async execute({ user_id, date }: ListRequest) {

        if (!user_id) {
            throw new Error("Invalid user");
        }

        const dashboard = [];
        const findUser = await prismaClient.user.findFirst({
            where: {
                id: user_id,
            }
        })

        const data = {
            tag: 'saldo',
            saldo: findUser.balance
        }

        const findReceive = await prismaClient.receive.findMany({
            where: {
                date: date,
                user_id: user_id,
                type: 'venda'
            }
        })

        const findExpenses = await prismaClient.receive.findMany({
            where: {
                date: date,
                user_id: user_id,
                type: 'debito'
            }
        })


        const resultRevenue = findReceive.reduce(getSoma, 0);

        const resultExpenses = findExpenses.reduce(getSoma, 0);

        function getSoma(total: number, num: ItemProp) {
            return total + num.value;
        }

        const sumDailyRevenue = {
            tag: 'receita',
            saldo: resultRevenue
        }

        const sumDailyExpense = {
            tag: 'debito',
            saldo: resultExpenses
        }

        dashboard.push(sumDailyRevenue, data, sumDailyExpense);

        return dashboard;
    }
}
export { ListUserBalanceService }