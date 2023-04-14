import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class LogoutController {

    index({ email, password }) {
        // validate access token
        // find and invalidate refresh token
        // return response
    }

}