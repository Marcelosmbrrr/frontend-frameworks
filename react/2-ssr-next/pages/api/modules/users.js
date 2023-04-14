import { UserController } from '../../../controllers/modules/users/UserController';

export default function handler(req, res) {

    const controller = new UserController();

    if (req.method === 'GET') {
        const { limit, page, search } = req.query;
        const response = controller.index(limit, page, search);
    } else if (req.method === 'POST') {
        const response = controller.create(req.body.data);
    } else if (req.method === 'PATCH') {
        const { id } = req.query;
        const response = controller.update(req.body.data, id);
    } else if (req.method === 'DELETE') {
        const { id } = req.query;
        const response = controller.delete(req.body.data, id);
    }

    res.status(200).json({ name: 'login' });
}