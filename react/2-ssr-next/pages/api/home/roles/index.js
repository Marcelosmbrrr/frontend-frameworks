import { RolesController } from '../../../../services/controllers/RolesController';

const controller = new RolesController();

export default async function handler(req, res) {
    try {

        const { method } = req;

        if (method === "GET") {

            const data = await controller.getRoles();
            res.status(200).json({ roles: data, message: 'Roles found.' });

        } else if (method === "POST") {

            await controller.addRole({
                name: req.body.name,
                read: true,
                write: false
            });

            res.status(201).json({ message: 'Role successful created.' });

        }

    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }

}