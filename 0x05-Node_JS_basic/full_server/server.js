import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

routes(app);

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
