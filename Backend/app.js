import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { Contact } from './models/Contact.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware setup
const allowedOrigins = [process.env.FRONTEND_URL]; // Add other domains if necessary

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {  // Allow no origin if called server-side (e.g. Postman)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST'],
  credentials: true,
};

app.use(cors(corsOptions));
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
      message: 'Please provide all details (name, email, and message).',
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
      message: 'Internal Server Error while saving the message.',
    });
  }
});

// Server setup
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
