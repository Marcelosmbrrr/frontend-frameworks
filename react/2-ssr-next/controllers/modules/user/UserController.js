import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

export class UserController {

    async index(limit, offset, search) {

        const users = await prisma.user.findMany({
            skip: offset,
            take: limit,
            where: {
                OR: [
                    { id: search },
                    { name: search },
                    { email: search }
                ]
            }
        });

        if (!users) {
            throw new Error("Error! No users found.", { code: 404 });
        }

        return {
            message: "",
            code: 200,
            data: users
        };
    }

    async create({ name, email, password }) {

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hash(password),
                roleId: 2
            },
        })

        if (!user) {
            throw new Error("Error! User creation failed.", { code: 409 });
        }

        return {
            message: "Success! User was created.",
            code: 201,
            data: user
        };
    }

    async update({ name, username, email, password, roleId }, identifier) {

        const updatedUser = await prisma.user.update({
            where: {
                id: identifier,
            },
            data: {
                name: name,
                username: username,
                email: email,
                password: password,
                roleId: roleId
            },
        });

        if (!updatedUser) {
            throw new Error("Error! User update failed.", { code: 304 });
        }

        return {
            message: "Success! User was updated.",
            code: 200
        };
    }

    async delete(identifiers) {

        const deletedUsers = await prisma.user.deleteMany({
            where: {
                id: {
                    in: identifiers
                }
            }
        });

        if (!deletedUsers) {
            throw new Error("Error! User remotion failed.", { code: 400 });
        }

        const message = identifiers.length === 1 ? "Success! User was deleted." : "Success! Users was deleted.";

        return {
            message: message,
            code: 200
        };
    }
}