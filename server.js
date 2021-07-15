require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');
const app = express();

const PORT = process.env.PORT || 3000;

require('./config/db.js');
connectDB();


//routes
app.use('/file/api',require('./routes/files'));



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});