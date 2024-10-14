import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
const jwtSecret = process.env.JWT_SECRET;
const { sign } = jwt;

export async function login(req, res) {
  const { email, senha } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || senha !== user.senha) {
    return res.status(401).send('Credenciais inválidas');
  }

  const token = sign({ userId: user.id, cargo: user.cargo, email: user.email }, jwtSecret, { expiresIn: '1h' });
  res.json({ token });
}
