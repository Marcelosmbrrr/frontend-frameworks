import { MyProfileController } from '../../../controllers/modules/myprofile/MyProfileController';

export default function handler(req, res) {

    const controller = new MyProfileController();

    if (req.method === 'GET') {
        const { limit, page, search } = req.query;
        const response = controller.index(limit, page, search);
    } else if (req.method === 'PATCH') {
        const { id } = req.query;
        const response = controller.update(req.body.data, id);
    } else if (req.method === 'DELETE') {
        const { id } = req.query;
        const response = controller.delete(req.body.data, id);
    }

    res.status(200).json({ name: 'login' });
}