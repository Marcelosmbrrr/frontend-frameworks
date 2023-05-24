import { UsersController } from "../../../../services/controllers/UsersController";

const controller = new UsersController();

export default async function handler(req, res) {
    try {

        const { method } = req;

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

        }

    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }
}