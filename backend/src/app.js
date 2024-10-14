import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { router as authRoutes } from './routes/authRoutes.js';
import { router as roteiroRoutes } from './routes/roteiroRoutes.js';
import { sequelize } from '../config/database.js';
import cors from 'cors';

const { json } = bodyParser;

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['*'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(json());
app.use(cors(corsOptions));

app.use('/auth', authRoutes);
app.use('/roteiros', roteiroRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Backend rodando na porta 5000');
  });
});
