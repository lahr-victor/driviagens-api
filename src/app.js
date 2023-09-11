import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler.middleware.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(chalk.bgGreen(`Running server on port ${port}! 🚀`));
});
