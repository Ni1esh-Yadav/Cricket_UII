const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();

// Middleware

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = 'mongodb+srv://anandrajs12345:Nileshkumar@cluster0.ay7pv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

 mongoose.connect(mongoURI,
    //  {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
)
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Define a schema for form data
const formDataSchema = new mongoose.Schema({
    name: String,
    age: Number,
    team: String,
    role: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

// Define a POST route to handle form submissions
app.post('/submit', (req, res) => {
    const formData = new FormData(req.body);
    formData.save()
        .then(() => res.json({ message: 'Form data saved to the database' }))
        .catch(err => res.status(500).json({ error: 'Failed to save data' }));
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
