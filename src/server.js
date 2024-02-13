const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const morgan = require("morgan");
app.use(morgan("dev"));

const {connectToDb} = require('../config/db');
const blog = require('../model/blog')
const comment = require('../model/comments')
const routes = require('../routes/router')
app.use('/api', routes)
const PORT = 5001;
app.listen(PORT, async ()=>{
    console.log(`server is listening on port ${PORT}`);
    await connectToDb();
})