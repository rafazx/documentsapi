const express = require('express');
require('./db/connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config/config');

const app = express();
app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});

app.use(cors());
app.use(bodyParser());  
app.use(bodyParser.urlencoded({
    parameterLimit:50000,
    limit: '10mb',
    extended: true}));
app.use(bodyParser.json({limit: '10mb'}));


const router = require('./router/router')

app.use('/api', router);
