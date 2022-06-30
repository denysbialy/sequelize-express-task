require('dotenv').config();
const express = require('express');
// const router = express.Router();
const router = require('./routers')
const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 9999;

app.listen(PORT, (req, res, next) => {
  console.log(`Start server on port:${PORT}`);
});
