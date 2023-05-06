const User = require('../models/User');

// Get user profile function
exports.getProfile = (req, res, next) => {
  // Find the user by ID and exclude password field from the result
  User.findById(req.userId, { password: 0 }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ user });
  });
};

// Update user profile function
exports.updateProfile = (req, res, next) => {
  // Extract user information from request body
  const { name, email } = req.body;

  // Find the user by ID and update the name and email fields
  User.findByIdAndUpdate(req.userId, { name, email }, { new: true }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ user });
  });
};
