import { User } from "../models/User";
import { getDoc } from "firebase/firestore";

export class UsersController {

    #model;

    constructor() {
        this.#model = new User();
    }

    async getUsers(where = null) {
        const result = await this.#model.getMany(where);

        // Map with async callback returns a promisse
        const promises = result.docs.map(async (docSnap) => {

            // Get referenced role by roleRef
            const roleSnap = await getDoc(docSnap.data().role);

            // Group all data
            const docData = docSnap.data();
            docData["uuid"] = docSnap.id;
            docData["role"] = roleSnap.data();
            docData["role"].uuid = roleSnap.id;

            return docData;

        });

        const resolvedPromises = await Promise.all(promises);
        return resolvedPromises;

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