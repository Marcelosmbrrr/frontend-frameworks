import { doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../utils/firebase";

export default async function handler(req, res) {
    const { method } = req;

    try {

        if (!method === "POST") {
            throw new Error('Method not allowed.', { code: 405 });
        }

        // If not exists, create the new user doc
        await setDoc(doc(firebaseDB, "users", req.body.uuid), {
            name: req.body.name,
            email: req.body.email,
            role: "roles/aUadzbBBGeA8erSkKiT5",
            status: true,
            created_at: new Date().getTime()
        });

        // Get new user doc
        const docRef = doc(firebaseDB, "users", req.body.uuid);
        const docSnap = await getDoc(docRef);

        const userData = docSnap.data();

        res.status(201).json({
            user: {
                name: userData.name,
                email: userData.email,
                role: { name: 'guest' },
                status: userData.status,
                created_at: userData.created_at
            }
        });

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}