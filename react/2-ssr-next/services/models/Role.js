import { query, orderBy, limit } from "firebase/firestore";
import { firebaseDB } from "../../utils/firebase";

export class Role {

    #collection;

    constructor() {
        this.#collection = firebaseDB.collection("roles");
    }

    async getMany(where) {
        try {
            const q = query(this.#collection, orderBy("created_at", "desc"), limit(10));
            if (where) {
                q.or(where("name", "==", where));
            }
            const data = await q.get();
        } catch (e) {
            throw e;
        }
    }

    async add({ name, read, write }) {
        try {
            await this.#collection.add({
                name: name,
                read: read,
                write: write,
                created_at: new Date().now()
            });
        } catch (e) {
            throw e;
        }
    }

    async updateOne(uuid) {
        try {
            await this.#collection.doc(uuid).update({
                name: req.body.name,
                read: req.body.read,
                write: req.body.write
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