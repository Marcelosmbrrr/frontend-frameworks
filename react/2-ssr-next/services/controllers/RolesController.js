import { Role } from "../models/Role";

export class RolesController {

    #model;

    constructor() {
        this.#model = new Role();
    }

    async getRoles(where = null) {
        const result = await this.#model.getMany(where);

        return result.docs.map(docSnap => {

            const data = docSnap.data();
            data["uuid"] = docSnap.id;

            return data;

        });
    }

    async addRole(data) {
        await this.#model.add(data);
    }

    async updateRole(identifier, data) {
        await this.#model.updateOne(identifier, data);
    }

    async deleteRole(identifier) {
        await this.#model.deleteOne(identifier);
    }

}