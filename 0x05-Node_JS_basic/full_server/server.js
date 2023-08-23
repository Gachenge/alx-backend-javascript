import express from 'express';
import allRoutes from './routes';

const app = express();
const port = 1245;

allRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
