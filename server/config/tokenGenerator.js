const jwt = require('jsonwebtoken')
require('dotenv').config()

const createAccessToken = (user)=>{
    return jwt.sign(
        {id: user._id, username: user.username, email: user.email},
        process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'}
    )
}

const createRefreshToken = (user)=>{
    return jwt.sign(
        {id: user._id, username: user.username, email: user.email},
        process.env.REFRESH_TOKEN_SECRET, {expiresIn: '15d'}
    )
}

module.exports = { createAccessToken, createRefreshToken }