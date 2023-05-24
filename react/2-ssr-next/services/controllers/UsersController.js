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

    async updateUser(data) {
        return this.#model.updateOne(data);
    }

    async deleteUser(uuid) {
        return this.#model.deleteOne(uuid);
    }

}