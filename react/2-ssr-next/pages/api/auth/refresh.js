import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../../../services/firebase/providers";

export default async function handler(req, res) {
    const { method } = req;
    const { user } = query; // uuid
    
    try {
        if (!method === "GET") {
            throw new Error({ code: 405, message: 'Method not allowed.' });
        }

        const userRef = doc(firebaseDB, "users", user);
        const docSnap = await getDoc(userRef);

        res.status(200).json({ data: { uuid: docSnap.localId, ...docSnap.data() } });
    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }

}