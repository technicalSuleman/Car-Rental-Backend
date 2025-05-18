// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load .env variables
dotenv.config();

// Import payment routes
const paymentRoutes = require('./routes/payementRoute');

const app = express();

// Middleware
app.use(cors());               // Enable CORS
app.use(express.json());       // Parse JSON request body

// Routes
app.use('/api/payment', paymentRoutes);

// Server Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
