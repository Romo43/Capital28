require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initializations
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Database
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => console.log('Connected to the database')).catch(err => console.log(err));

// Routes
app.use('/api/news', require('./routes/routes'))

// Start Server
app.listen(port, () => console.log(`Server on port:${port}`));