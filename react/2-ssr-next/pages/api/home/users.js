import { UsersController } from "../../../services/controllers/UsersController";

const controller = new UsersController();

export default async function handler(req, res) {
    const { method, query } = req;

    try {

        if (method === "GET") {

            const data = await controller.getUsers();
            res.status(200).json({ users: data, message: 'Users found.' });

        } else if (method === "POST") {

            await controller.addUser({
                name: req.body.name,
                email: req.body.email,
                role: "roles/aUadzbBBGeA8erSkKiT5",
                status: true
            });

            res.status(201).json({ message: 'User successful created.' });

        } else if (method === "PATCH") {

            await controller.updateUser({
                name: req.body.name,
                role: req.body.role,
                status: req.body.status
            });

            res.status(200).json({ message: 'User successful updated.' });

        } else if (method === "DELETE") {

            await controller.deleteUser(query.uuid);
            res.status(200).json({ message: 'User successful deleted.' });

        }

    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }
}