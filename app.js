const express = require('express');
const mongoose = require('mongoose');
const clothingRoutes = require('./routes/clothes');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json()); // Parse incoming JSON

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// Routes
app.use('/api', clothingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
