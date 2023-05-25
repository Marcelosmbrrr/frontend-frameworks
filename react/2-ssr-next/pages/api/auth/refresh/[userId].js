import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../utils/firebase";

export default async function handler(req, res) {
    const { method, query } = req;
    const { userId } = query;

    try {
        if (!method === "GET") {
            throw new Error('Method not allowed.', { code: 405 });
        }

        // Get user doc
        const userRef = doc(firebaseDB, "users", userId);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            throw new Error('User not found.', { code: 404 });
        }

        // Get referenced role by roleRef
        const roleSnap = await getDoc(userSnap.data().role);

        // Group all data
        const data = userSnap.data();
        data["uuid"] = userSnap.id;
        data["role"] = roleSnap.data();

        res.status(200).json({ user: data });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

}