import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from "firebase/firestore";
import { firebaseAuth, firebaseDB } from "../../../utils/firebase";

const usersRef = collection(firebaseDB, "users");

export default async function handler(req, res) {
    const { method } = req;

    try {
        if (!method === "POST") {
            throw new Error('Method not allowed.', { code: 405 });
        }

        // Create user authentication
        const user = await createUserWithEmailAndPassword(firebaseAuth, req.body.email, req.body.password);

        if (!user) {
            throw new Error('Server error.', { code: 405 });
        }

        // Create user document
        await setDoc(doc(usersRef, response.user.uid), {
            name: req.body.name,
            email: req.body.email,
            role: "roles/aUadzbBBGeA8erSkKiT5",
            status: true,
            created_at: new Date().now()
        });

        res.status(200).json({ message: 'Registration successful.' });
    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }
}