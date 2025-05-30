import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

import apiRoutes from './routes/api.js';
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
