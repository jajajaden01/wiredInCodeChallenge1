import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import allRoutes from './routes';

dotenv.config();

const app = express();
const basePath = '/api/v1';
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(basePath, allRoutes);
app.use('*', (req, res) => {
  res.status(404).json({
    status: res.statusCode,
    error: 'endpoint not found !',
  });
});

export default app;
