const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Signup function
exports.signup = (req, res, next) => {
  // Extract user information from request body
  const { name, email, password } = req.body;

  // Check if user with the same email already exists
  User.findOne({ email }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (user) {
      return res.status(400).json({ error: 'User with the same email already exists' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      // Create a new user with hashed password
      const newUser = new User({ name, email, password: hashedPassword });

      // Save the new user to the database
      newUser.save((err, user) => {
        if (err) {
          return res.status(500).json({ error: err });
        }

        // Generate a JSON web token for the user
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return the user and token as response
        res.status(201).json({ user, token });
      });
    });
  });
};

// Login function
exports.login = (req, res, next) => {
  // Extract user information from request body
  const { email, password } = req.body;

  // Find the user by email
  User.findOne({ email }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Check if the password matches
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      if (!result) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      // Generate a JSON web token for the user
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Return the user and token as response
      res.status(200).json({ user, token });
    });
  });
};
