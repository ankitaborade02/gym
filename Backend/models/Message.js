import mongoose from 'mongoose';

// Define the schema for the message
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  ipAddress: { type: String, required: true },
  date: { type: Date, default: Date.now }, // Automatically stores the date the message was created
});

// Create the model from the schema
export const Message = mongoose.model('Message', messageSchema);
