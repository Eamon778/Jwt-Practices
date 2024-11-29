const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, required: true },
        name: { type: String, required: true, trim: true },
        role: { type: String, enum: ['user', 'admin'], default: 'user' },
        refreshToken: { type: String, default: null },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Users', UserSchema)