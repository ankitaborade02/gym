import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { Contact } from './models/Contact.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware setup
app.use(cors({
  origin: process.env.FRONTEND_URL, // Allow frontend URL from environment
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow necessary HTTP methods
  credentials: true, // If you're using cookies or authentication
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.error('MongoDB Connection Error:', error));


// POST route to save the contact form data to MongoDB
app.post('/send/mail', async (req, res) => {
  const { name, email, message } = req.body;

  // Ensure name, email, and message are provided
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all details',
    });
  }

  try {
    // Save the contact form data to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({
      success: true,
      message: 'Message saved to the database successfully.',
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
});

// Server setup
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
