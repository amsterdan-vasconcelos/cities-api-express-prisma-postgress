import express from 'express';
import helmet from 'helmet';
import { home } from './routes';

const app = express();

app.use(express.json());
app.use(helmet());

app.use(home.router);

export default app;
