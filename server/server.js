const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (req,res) =>{
    res.json('this is home')
})

app.post('/message', (req,res) =>{
    const message = req.body
    console.log(message)
    res.json({message:'message received'})
})

app.listen(3000, () =>{
    console.log('server is running')
})