const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // never returned in queries
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// Index on email for faster login lookups
userSchema.index({ email: 1 });

// Generate JWT token — expires in 1 hour for security
userSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET || 'secret123',
    { expiresIn: '1h' } // Changed from 7d → 1h
  );
};

module.exports = mongoose.model('User', userSchema);