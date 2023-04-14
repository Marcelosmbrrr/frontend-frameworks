import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

export class MyProfileController {

    async index(identifier) {

        const data = await prisma.user.findFirst({
            where: {
                id: identifier
            }
        });

        if (!data) {
            throw new Error("Error! No data found.", { code: 404 });
        }

        return {
            message: "Success! Your data was found.",
            code: 200,
            data: data
        };
    }

    async update({ name, username, email, password }, identifier) {

        const updatedUser = await prisma.user.update({
            where: {
                id: identifier,
            },
            data: {
                name: name,
                username: username,
                email: email,
                password: hash(password)
            }
        });

        if (!updatedUser) {
            throw new Error("Error! Profile update failed.", { code: 304 });
        }

        return {
            message: "Success! Your profile data was updated.",
            code: 200
        };
    }

    async delete(identifier) {

        const userDeleted = await prisma.user.delete({
            where: {
                id: identifier
            }
        });

        if (!userDeleted) {
            throw new Error("Error! Deactivation failed.", { code: 400 });
        }

        return {
            message: "Success! Your account has been deactivated.",
            code: 200
        };
    }

}