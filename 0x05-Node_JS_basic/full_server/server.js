import routes from './routes';
import express from 'express';

const app = express();
const port = 1245;

routes(app);

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
