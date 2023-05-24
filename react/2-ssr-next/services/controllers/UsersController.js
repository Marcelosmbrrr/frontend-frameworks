import { User } from "../models/User";

export class UsersController {

    #model;

    constructor() {
        this.#model = new User();
    }

    async getUsers(where = null) {
        const data = this.#model.getMany(where);
        return data;
    }

    async addUser(data) {
        return this.#model.add(data);
    }

    async updateUser(identifier, data) {
        return this.#model.updateOne(identifier, data);
    }

    async deleteUser(identifier) {
        return this.#model.deleteOne(identifier);
    }

}