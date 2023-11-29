const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());

// Connect to MongoDB (replace 'your_db_name' and 'your_connection_string' with your actual details)
mongoose.connect('mongodb+srv://admin1:Rorukz123@inventoryapp.hqtjixg.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware for parsing JSON data
app.use(express.json());

// Define routes for registration and login (You'll need to create controllers for these)
app.use('/api/register', require('./routes/register'));
app.use('/api/login', require('./routes/login'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
