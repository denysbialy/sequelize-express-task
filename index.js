require('dotenv').config()
const express = require('express');
const { notFoundTask, sequelizeUniqueEH } = require('./middleware/error.handling');
const router = require('./routers');

const app = express();
app.use(express.json());

app.use(router);
app.use(notFoundTask);
app.use(sequelizeUniqueEH);

const PORT = process.env.PORT || 9999;

app.listen(PORT, (req, res, next)=>{
    console.log(`start server on port:${PORT}`)
})