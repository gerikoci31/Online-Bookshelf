const jwt = require('jsonwebtoken');

// Set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Function to verify and attach user data to GraphQL context
  authMiddleware: function (req, res, next) {
    // Extract token from headers
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7, authHeader.length) : '';

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    // Verify token and attach user data to context
    try {
      const { data } = jwt.verify(token, secret, { expiresIn: expiration });
      req.user = data;
      // Continue to next middleware or resolver
      next();
    } catch (err) {
      console.log('Invalid token', err);
      return res.status(400).json({ message: 'Invalid token!' });
    }
  },

  // Function to sign tokens
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
