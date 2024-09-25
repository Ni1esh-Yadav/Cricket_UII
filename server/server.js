const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests (frontend on a different port)
app.use(bodyParser.json()); // Parse incoming requests as JSON

// Define the route for receiving form data
app.post('/submit', (req, res) => {
  const { name, age, team, role } = req.body;

  // Handle the form data (you can save it to a database here)
  console.log('Received data:', req.body);

  // Send a response back to the frontend
  res.json({ message: 'Form submission successful', data: req.body });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/submit', (req, res) => {
    const { name, age, team, role } = req.body;
  
    // Here you would handle the data, e.g., save it to a database
    console.log('Form data received:', req.body);
  
    // Respond back to the client
    res.json({ message: 'Form submission successful', data: req.body });
  });
  
