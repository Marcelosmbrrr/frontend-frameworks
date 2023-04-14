import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PostController {

    async index(limit, offset, search) {

        const posts = await prisma.post.findMany({
            skip: offset,
            take: limit,
            where: {
                OR: [
                    { id: search },
                    { title: search },
                    { content: search }
                ]
            }
        });

        if (!posts) {
            throw new Error("Error! No posts found.", { code: 404 });
        }

        return {
            message: "",
            code: 200,
            data: posts
        };
    }

    async create({ name, access }) {

        const post = await prisma.post.create({
            data: {
                name: name,
                access: access
            },
        })

        if (!post) {
            throw new Error("Error! Post creation failed.", { code: 409 });
        }

        return {
            message: "Success! Post was created.",
            code: 201,
            data: post
        };
    }

    async update({ name, title, content, published, authorID }, identifier) {

        const updatedPost = await prisma.post.update({
            where: {
                id: identifier,
            },
            data: {
                name: name,
                title: title,
                content: content,
                published: published,
                authorId: authorID
            }
        });

        if (!updatedPost) {
            throw new Error("Error! Post update failed.", { code: 304 });
        }

        return {
            message: "Success! Post was updated.",
            code: 200
        };
    }

    async delete(identifiers) {

        const deletedPosts = await prisma.post.deleteMany({
            where: {
                id: {
                    in: identifiers
                }
            }
        });

        if (!deletedPosts) {
            throw new Error("Error! Post remotion failed.", { code: 400 });
        }

        const message = identifiers.length === 1 ? "Success! Post was deleted." : "Success! Posts was deleted.";

        return {
            message: message,
            code: 200
        };
    }

}