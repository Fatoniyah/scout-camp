const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyPaeser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { readdirSync } = require('fs')



//app

const app = express();


// middleware
app.use(morgan("dev"));
app.use(bodyPaeser.json({ limit: "2mb" }));
app.use(cors());

const port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`server is running on port ${port}`));


