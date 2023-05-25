import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { firebaseAuth, firebaseDB } from "../../../utils/firebase";

export default async function handler(req, res) {
    const { method } = req;

    try {
        if (!method === "POST") {
            throw new Error('Method not allowed.', { code: 405 });
        }

        // Create user authentication
        const response = await createUserWithEmailAndPassword(firebaseAuth, req.body.email, req.body.password);

        // Create user document
        await setDoc(doc(firebaseDB, "users", response.user.uid), {
            name: req.body.name,
            email: req.body.email,
            role: "roles/aUadzbBBGeA8erSkKiT5",
            status: true,
            created_at: new Date().getTime()
        });

        res.status(201).json({ message: 'Registration successful.' });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}