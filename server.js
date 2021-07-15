require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

require('./config/db.js');
connectDB();

app.set('views',path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//routes
app.use('/file/api',require('./routes/files'));
app.use('/Files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});