const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;

// require dotenv during development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Connect to MongoDB Atlas Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB successfully!')
})

// Use middlewares
app.use(express.json()); // post json from client I think; remember body-parser?
app.use(express.urlencoded({ extended: true })); // able to get req.body, I think; remember body-parser?
app.use(cors());

app.get('/api/', (req, res) => {
    console.log('woo')
    res.json({
        message: "Vincent is a douche"
    });
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));