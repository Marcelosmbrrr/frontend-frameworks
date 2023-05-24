import { User } from "../models/User";

export class UsersController {

    #model;

    constructor() {
        this.#model = new User();
    }

    async getUsers(where = null) {
        const result = await this.#model.getMany(where);
        return result.docs.map(doc => doc.data());
    }

    async addUser(data) {
        await this.#model.add(data);
    }

    async updateUser(identifier, data) {
        await this.#model.updateOne(identifier, data);
    }

    async deleteUser(identifier) {
        await this.#model.deleteOne(identifier);
    }

}