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

        let response = { found: 0 };
        if (userSnap.exists()) {
            const userData = userSnap.data();
            response = {
                found: 1,
                user: {
                    name: userData.name,
                    email: userData.email,
                    role: { name: 'guest' },
                    status: userData.status,
                    created_at: userData.created_at
                }
            }
        }

        res.status(200).json(response);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}