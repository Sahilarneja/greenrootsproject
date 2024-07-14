const express = require('express');
const connection = require("./connection");
const app = express();
const cors = require('cors');
const contactRoute = require('./routes/contactRoutes');
app.use(express.json());
app.use(cors());

connection();
require('dotenv').config();

app.use('/api', contactRoute);

const port = process.env.port || 8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})