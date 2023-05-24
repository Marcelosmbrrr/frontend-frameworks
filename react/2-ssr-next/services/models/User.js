import { query, orderBy, limit, collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { firebaseDB } from "../../utils/firebase";

export class User {

    #collection;

    constructor() {
        this.#collection = collection(firebaseDB, "users");
    }

    async getMany(where) {
        try {
            const sql = query(this.#collection, orderBy("created_at"), limit(10));
            const result = await getDocs(sql);
            
            return result;
        } catch (e) {
            throw e;
        }
    }

    async add({ name, email, role, status }) {
        try {
            await addDoc(this.#collection, {
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

    async updateOne(identifier, { name, role, status }) {
        try {
            const user = doc(firebaseDB, "users", identifier);
            await updateDoc(user, {
                name: name,
                role: role,
                status: status
            });
        } catch (e) {
            throw e;
        }
    }

    async deleteMany(identifier) {
        try {
            const user = doc(firebaseDB, "users", identifier);
            await deleteDoc(user);
        } catch (e) {
            throw e;
        }
    }
}



