import express from 'express';
import cors from 'cors';

import routes from '../routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, '192.168.1.104',() => {
  console.log('Server started on port 3000!');
});