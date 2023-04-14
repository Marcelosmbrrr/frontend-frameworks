import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class RegistrationController {

  index({ name, email, password }) {
    // validate new data
    // create new user
    // send email
    // return response
  }

}