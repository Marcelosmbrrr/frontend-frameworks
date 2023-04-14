import { LoginController } from '../../../controllers/auth/LoginController';

export default function handler(req, res) {

  const controller = new LoginController();

  if (req.method === 'POST') {
    const response = controller.index(req.body.data);
  }

  res.status(200).json({ name: 'login' });
}
