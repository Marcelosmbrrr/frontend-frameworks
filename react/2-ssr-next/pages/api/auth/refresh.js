import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../../../utils/firebase";

export default async function handler(req, res) {
    const { method } = req;
    const { user } = req.query;

    try {
        if (!method === "GET") {
            throw new Error('Method not allowed.', { code: 405 });
        }

        const userRef = doc(firebaseDB, "users", user);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            throw new Error('User not found.', { code: 404 });
        }

        res.status(200).json({ user: { uuid: docSnap.localId, ...docSnap.data() } });
    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }

}