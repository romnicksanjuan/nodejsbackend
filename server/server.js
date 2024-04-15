const express = require('express');
const mongoose = require('mongoose')
const User = require('./model/user')
const app = express();

mongoose.connect('mongodb+srv://romnick:1234@romnickdb.e14diyv.mongodb.net/mobile-dev')
.then(() => console.log('connected to database'))
app.use(express.json())


app.get('/', (req, res) => {
    res.json('this is home')
})

app.post('/message', async(req, res) => {
    const {message} = req.body
    try {
        const saveMessage = new User({message})
        await saveMessage.save();
        console.log(message)
        res.json({ message: 'message received' })
    } catch (error) {
        console.log(error)
    }

})

app.listen(3000, () => {
    console.log('server is running')
})