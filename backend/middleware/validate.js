const { ZodError } = require('zod');

/**
 * Zod validation middleware factory.
 * Usage: router.post('/register', validate(registerSchema), register)
 *
 * If the body fails the schema, it returns a 400 with all field errors.
 * If it passes, req.body is replaced with the parsed (sanitized) data.
 */
const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body); // throws ZodError on failure
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      // Format all Zod issues into a single readable message
      const messages = error.errors.map((e) => e.message).join(', ');
      return res.status(400).json({
        success: false,
        message: messages,
      });
    }
    next(error);
  }
};

module.exports = validate;
