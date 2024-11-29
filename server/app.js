const express = require('express')
require('dotenv').config()
const router = require('./routes/router')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, PUT, PATCH, POST, DELETE, HEAD',
    credentials: true
}))


app.use('/api/v1', router)

const start = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is listing on port: ${process.env.PORT}`);
        })
    } catch (c) {
        console.log(e)
    }
}

start()