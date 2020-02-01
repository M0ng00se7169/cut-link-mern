const { Router } = require("express");
const bcrypt = require("bcryptjs");
const keys = require('../config/keys')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Incorrect Email").isEmail(), // Validation Email using express-validator
    check("password", "Minimal length of password is 6 symbols").isLength({
      min: 6
    }) // Validation Password using express-validator
  ],
  async (req, res) => {
    try {
      //console.log('body', req.body);
      

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect data while registration"
        });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: "This user is already exists" });
      }

      // Hashing password for user creation using BCrypt
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: "User has been created" });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong! Try again..." });
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check('email', 'Enter your Email').normalizeEmail().isEmail(),
    check('password', 'Enter your password').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect data while login"
        });
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'User not found' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect password, try again' })
      }

      const token = jwt.sign(
        { userId: user.id },
        keys.jwtSecret,
        { expiresIn: '1h' }
      )

      res.json({ token, userId: user.id })

    } catch (e) {
      res.status(500).json({ message: "Something went wrong! Try again..." });
    }
  });

module.exports = router;
