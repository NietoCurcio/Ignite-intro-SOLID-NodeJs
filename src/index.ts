import express from 'express';

import { usersRoutes } from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);

export { app };

// S - Single-responsiblity Principle
// O - Open-closed Principle
// L - Liskov Substitution Principle
// I - Interface Segregation Principle
// D - Dependency Inversion Principle
