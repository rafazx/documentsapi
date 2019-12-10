const mongoose = require('mongoose');
const dbUrl = require('../config/config').MONGO_URI

mongoose.connect(dbUrl,{ useNewUrlParser: true })
.then(() => { 
    console.log('Conectado no Banco de Dados');
})
.catch((err) => {
    console.error(err)
    process.exit(1);
})