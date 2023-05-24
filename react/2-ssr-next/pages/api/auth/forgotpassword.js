import { doc, getDoc } from "firebase/firestore";
import { firebaseAuth, firebaseDB } from "../../../utils/firebase";

export default async function handler(req, res) {
    const { method } = req;

    try {

        if (!method === "POST") {
            throw new Error('Method not allowed.', { code: 405 });
        }


    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }

}