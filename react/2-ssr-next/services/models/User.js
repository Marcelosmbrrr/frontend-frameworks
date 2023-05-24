import { query, orderBy, limit } from "firebase/firestore";
import { firebaseDB } from "../../utils/firebase";

export class User {

    #collection;

    constructor() {
        this.#collection = firebaseDB.collection("users");
    }

    async getMany(where) {
        try {
            const q = query(this.#collection, orderBy("created_at", "desc"), limit(10));
            if (where) {
                q.or(where("name", "==", where), where("email", "==", where));
            }
            const data = await q.get();
        } catch (e) {
            throw e;
        }
    }

    async add({ name, email, role, status }) {
        try {
            await this.#collection.add({
                name: name,
                email: email,
                role: role,
                status: status,
                created_at: new Date().now()
            });
        } catch (e) {
            throw e;
        }
    }

    async updateOne(name, role, status) {
        try {
            await this.#collection.doc("uuid").update({
                name: name,
                role: role,
                status: status
            });
        } catch (e) {
            throw e;
        }
    }

    async deleteMany(uuid) {
        try {
            await this.#collection.doc(uuid).delete();
        } catch (e) {
            throw e;
        }
    }
}



