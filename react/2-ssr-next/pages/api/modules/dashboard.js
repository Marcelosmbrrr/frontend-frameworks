import { DashboardController } from '../../../controllers/modules/dashboard/DashboardController';

export default function handler(req, res) {

    const controller = new DashboardController();

    if (req.method === 'GET') {
        const response = controller.index();
    } 

    res.status(200).json({ name: 'login' });
}