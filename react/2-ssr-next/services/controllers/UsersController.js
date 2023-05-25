import { User } from "../models/User";
import { getDoc } from "firebase/firestore";

export class UsersController {

    #model;

    constructor() {
        this.#model = new User();
    }

    async getUsers(where = null) {
        const result = await this.#model.getMany(where);

        return result.docs.map(async (docSnap) => {

            // Get referenced role by roleRef
            const roleSnap = await getDoc(docSnap.data().role);

            // Group all data
            const docData = docSnap.data();
            docData["uuid"] = docSnap.localId;
            docData["role"] = roleSnap.data();

            return docData;

        });
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