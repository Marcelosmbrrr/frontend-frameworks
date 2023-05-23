import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { firebaseAuth, firebaseDB } from "../../../services/firebase";

export default async function handler(req, res) {
    const { method } = req;

    try {

        if (!method === "POST") {
            throw new Error('Method not allowed.', { code: 405 });
        }

        const response = await signInWithEmailAndPassword(firebaseAuth, req.body.email, req.body.password);
        const userRef = doc(firebaseDB, "users", response.user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            throw new Error('User not found.', { code: 404 });
        }

        res.status(200).json({ user: { uuid: response.user.uid, ...docSnap.data() }, message: 'Successful login.' });
    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }

}