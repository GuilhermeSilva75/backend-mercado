import { prismaClient } from "../../prisma";

interface AuthRequest {
    email: string
    password: string
}


class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        
    }
}

export { AuthUserService }