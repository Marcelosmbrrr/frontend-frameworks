import { query, orderBy, limit, collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { firebaseDB } from "../../utils/firebase";

export class Role {


    #collection;

    constructor() {
        this.#collection = collection(firebaseDB, "roles");
    }

    async getMany(where) {
        try {
            const q = query(this.#collection, orderBy("created_at", "desc"), limit(10));
            return await getDocs(q);
        } catch (e) {
            throw e;
        }
    }

    async add({ name, read, write }) {
        try {
            await addDoc(this.#collection, {
                name: name,
                read: read,
                write: write,
                created_at: new Date().now()
            });
        } catch (e) {
            throw e;
        }
    }

    async updateOne(identifier, { name, read, write }) {
        try {
            const role = doc(firebaseDB, "roles", identifier);
            await updateDoc(role, {
                name: name,
                read: read,
                write: write
            });
        } catch (e) {
            throw e;
        }
    }

    async deleteMany(identifier) {
        try {
            const role = doc(firebaseDB, "roles", identifier);
            await deleteDoc(role);
        } catch (e) {
            throw e;
        }
    }
}