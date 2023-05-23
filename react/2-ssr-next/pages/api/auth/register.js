import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { firebaseAuth, firebaseDB } from "../../../services/firebase/providers";

export default async function handler(req, res) {
    const { method } = req;
    
    try {
        if (!method === "POST") {
            throw new Error({ code: 405, message: 'Method not allowed.' });
        }

        // Create user authentication
        const user = await createUserWithEmailAndPassword(firebaseAuth, req.body.email, req.body.password);

        if (!user) {
            throw new Error({ code: 500, message: 'Server error.' });
        }

        // Create user document
        const ref = doc(firebaseDB, "users", response.user.uid);
        await setDoc(ref, {
            name: name,
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