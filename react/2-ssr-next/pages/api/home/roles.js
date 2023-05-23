import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseDB } from '../../../services/firebase';

export default async function handler(req, res) {
    const { method } = req;

    try {

        if (method === "GET") {

            // Get all or by factor

        } else if (method === "POST") {

            // Create user document
            const ref = doc(firebaseDB, "roles");
            await setDoc(ref, {
                name: req.body.name,
                read: true,
                write: false
            });

            res.status(201).json({ message: 'Role successful created.' })

        } else if (method === "PATCH") {

            // Update one by uuid

        } else if (method === "DELETE") {

            // Delete by uuid

        }

    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }


}