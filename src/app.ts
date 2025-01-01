import express from 'express';
import helmet from 'helmet';
import { home, users, cities, people } from './routes';

const app = express();

app.use(express.json());
app.use(helmet());

app.use(home.router);
app.use(users.router);
app.use(cities.router);
app.use(people.router);

export default app;
