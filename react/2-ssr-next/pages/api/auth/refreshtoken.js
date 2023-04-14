import { RefreshTokenController } from '../../../controllers/auth/RefreshTokenController';

export default function handler(req, res) {

    const controller = new RefreshTokenController();

    if (req.method === 'POST') {
        const response = controller.index(req.body.data);
    }

    res.status(200).json({ name: 'refresh-token' });
}
