import { RolesController } from "../../../services/controllers/RolesController";

const controller = new RolesController();

export default async function handler(req, res) {
    const { method, query } = req;

    try {

        if (method === "GET") {

            const data = await controller.getRoles();
            res.status(200).json({ roles: data, message: 'Roles found.' });

        } else if (method === "POST") {

            await controller.addRole({
                name: req.body.name,
                read: true,
                write: false,
                created_at: new Date().now()
            });

            res.status(201).json({ message: 'Role successful created.' });

        } else if (method === "PATCH") {

            controller.updateRole("uuid", {
                name: req.body.name,
                read: req.body.read,
                write: req.body.write
            });

            res.status(200).json({ message: 'Role successful updated.' });

        } else if (method === "DELETE") {

            await usersRef.doc(query.uuid).delete();
            res.status(200).json({ message: 'Role successful deleted.' });

        }

    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }


}