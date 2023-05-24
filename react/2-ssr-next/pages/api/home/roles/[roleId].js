import { RolesController } from '../../../../services/controllers/RolesController';

const controller = new RolesController();

export default async function handler(req, res) {
    try {

        const { method, query } = req;
        const { roleId } = query;

        if (method === "PATCH") {

            await controller.updateUser(roleId, {
                name: req.body.name,
                read: req.body.read,
                write: req.body.write
            });

            res.status(200).json({ message: 'Role successful updated.' });

        } else if (method === "DELETE") {

            await controller.deleteRole(roleId);
            res.status(200).json({ message: 'Role successful deleted.' });

        }

    } catch (e) {
        res.status(e.code).json({ message: e.message });
    }
}