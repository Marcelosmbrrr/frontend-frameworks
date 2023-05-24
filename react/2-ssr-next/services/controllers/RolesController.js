import { Role } from "../models/Role";

export class RolesController {

    #model;

    constructor() {
        this.#model = new Role();
    }

    async getRoles(where = null) {
        const data = this.#model.getMany(where);
        return data;
    }

    async addRole(data) {
        return this.#model.add(data);
    }

    async updateRole(identifier, data) {
        return this.#model.updateOne(identifier, data);
    }

    async deleteRole(identifier) {
        return this.#model.deleteOne(identifier);
    }

}