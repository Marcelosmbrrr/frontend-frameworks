import { RegistrationController } from '../../../controllers/auth/RegistrationController';

export default function handler(req, res) {

  const controller = new RegistrationController();

  if (req.method === 'POST') {
    const response = controller.index(req.body.data);
  }

  res.status(200).json({ name: 'registration' });
}
