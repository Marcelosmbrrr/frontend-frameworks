import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class RoleController {

    async index(limit, offset, search) {

        const roles = await prisma.role.findMany({
            skip: offset,
            take: limit,
            where: {
                OR: [
                    { id: search },
                    { name: search }
                ]
            }
        });

        if (!roles) {
            throw new Error("Error! No roles found.", { code: 404 });
        }

        return {
            message: "",
            code: 200,
            data: roles
        };
    }

    async create({ name, access }) {

        const role = await prisma.role.create({
            data: {
                name: name,
                access: access
            },
        })

        if (!role) {
            throw new Error("Error! Role creation failed.", { code: 409 });
        }

        return {
            message: "Success! Role was created.",
            code: 201,
            data: role
        };
    }

    async update({ name, access }, identifier) {

        const updatedRole = await prisma.role.update({
            where: {
                id: identifier,
            },
            data: {
                name: name,
                access: access
            },
        });

        if (!updatedRole) {
            throw new Error("Error! Role update failed.", { code: 304 });
        }

        return {
            message: "Success! Role was updated.",
            code: 200
        };
    }

    async delete(identifiers) {

        const deletedRoles = await prisma.role.deleteMany({
            where: {
                id: {
                    in: identifiers
                }
            }
        });

        if (!deletedRoles) {
            throw new Error("Error! Role remotion failed.", { code: 400 });
        }

        const message = identifiers.length === 1 ? "Success! Role was deleted." : "Success! Roles was deleted.";

        return {
            message: message,
            code: 200
        };
    }

}