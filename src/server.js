const express = require('express');
require('./db/connection');
const bodyParser = require('body-parser');
const { PORT } = require('./config/config');

const app = express();
app.use(bodyParser());


app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});

const router = require('./router/router')

app.use(express.json());
app.use('/api', router);
