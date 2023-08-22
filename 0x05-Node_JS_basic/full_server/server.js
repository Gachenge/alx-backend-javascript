import routes from './routes';
const express = require('express')
const app = express()
const port = 1245;

routes(app);
app.listen(port, () => {
    console.log(`Server listening on PORT ${PORT}`);
})

export default app;
module.exports =app;
