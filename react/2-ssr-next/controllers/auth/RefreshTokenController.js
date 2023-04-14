import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class RefreshTokenController {

  index({ access_token, refresh_token }) {
    // validate refresh token
    // find refresh token in db
    // create new refresh token and invalidate the actual
    // create new access token
    // return access and refresh token
  }

}