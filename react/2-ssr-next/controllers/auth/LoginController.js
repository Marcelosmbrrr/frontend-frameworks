import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class LoginController {

    index({ email, password }) {
        // validate authentication
        // generate refresh and access token
        // save refresh token in db
        // send email
        // return access and refersh token
    }

}