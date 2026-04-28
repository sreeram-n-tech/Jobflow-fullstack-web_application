const { z } = require('zod');

// Auth Schemas
const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const loginSchema = z.object({
  email: z.string().email('Please provide a valid email'),
  password: z.string().min(1, 'Password is required'),
});

// Job Schemas
const jobSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  role: z.string().min(1, 'Job role is required'),
  status: z.enum(['Applied', 'Interview', 'Offer', 'Rejected']).optional(),
  notes: z.string().max(1000).optional(),
});

module.exports = {
  registerSchema,
  loginSchema,
  jobSchema,
};
