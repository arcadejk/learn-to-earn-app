const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const lessonRoutes = require('./routes/lessons');
const marketplaceRoutes = require('./routes/marketplace');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/language-learn-nft')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/marketplace', marketplaceRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
