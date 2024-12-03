const Users = require('../models/user');
const Products = require('../models/product')
const bcrypt = require('bcrypt');
const { createAccessToken, createRefreshToken } = require('../config/tokenGenerator');

// POST: User Registration
const signUpRoute = async (req, res) => {
  const { username, email, password, name } = req.body;

  try {
    // Check if email or username already exists
    const existingEmail = await Users.findOne({ email });
    const existingUsername = await Users.findOne({ username });

    if (existingEmail) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
    if (existingUsername) {
      return res.status(400).json({ message: 'User with this username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new Users({ username, email, password: hashedPassword, name });

    // Generate tokens
    const accessToken = createAccessToken(newUser);
    const refreshToken = createRefreshToken(newUser);

    // Assign refresh token to user
    newUser.refreshToken = refreshToken;

    // Save the user to the database
    await newUser.save();

    // Set cookies
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000, // 15 minutes
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    });

    // Remove sensitive data before sending the response
    const { password: _, refreshToken: __, ...userData } = newUser.toObject();
    res.status(201).json({ message: 'User registered successfully', user: userData });

  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// POST: User Login
const loginRoute = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No user found with this email" });
    }

    // Check if password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate tokens
    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    // Update user's refresh token in the database
    user.refreshToken = refreshToken;
    await user.save();

    // Set cookies
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000, // 15 minutes
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    });

    // Remove sensitive data before sending the response
    const { password: _, refreshToken: __, ...userData } = user.toObject();
    res.status(200).json({ message: 'Login successful', user: userData });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// GET: All Data (example handler)
const getAllData = (req, res) => {
  res.status(200).json({ message: 'Getting all the data' });
};

const newProducts = async (req, res)=>{
  try{
    const product = await Products.find().sort({createdAt: -1}).limit(4)
    res.status(200).json(product)
  } catch (error){
    res.status(500).json({message: "Failed to fetch products"})
  }
}

module.exports = { getAllData, signUpRoute, loginRoute, newProducts };
