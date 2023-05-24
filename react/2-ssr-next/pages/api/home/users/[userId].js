import { UsersController } from "../../../../services/controllers/UsersController";

const controller = new UsersController();

export default async function handler(req, res) {
    try {

        const { method, query } = req;
        const { userId } = query;

        if (method === "PATCH") {

            await controller.updateUser(userId, {
                name: req.body.name,
                role: req.body.role,
                status: req.body.status
            });

            res.status(200).json({ message: 'User successful updated.' });

        } else if (method === "DELETE") {

            await controller.deleteUser(userId);
            res.status(200).json({ message: 'User successful deleted.' });

        }

    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }
}