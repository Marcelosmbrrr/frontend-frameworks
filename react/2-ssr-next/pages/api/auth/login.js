import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { firebaseAuth, firebaseDB } from "../../../services/firebase/providers";

export default async function handler(req, res) {
    const { method } = req;

    try {
        if (!method === "POST") {
            throw new Error({ code: 405, message: 'Method not allowed.' });
        }

        const response = await signInWithEmailAndPassword(firebaseAuth, req.body.email, req.body.password);
        const userRef = doc(firebaseDB, "users", response.user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            throw new Error({ code: 404, message: 'User not found.' });
        }

        res.status(200).json({ data: { uuid: response.user.uid, ...docSnap.data() }, message: 'Successful login.' });
    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }

}