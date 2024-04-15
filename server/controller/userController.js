const User = require('../model/user')

const Welcome = (req, res) => {
    res.json('this is welcome page')
}

const Register = async (req, res) => {
    const { name,username,password } = req.body
    try {
        const saveUser = new User({ name,username,password })
        await saveUser.save();
        console.log(saveUser)
        res.json({ message: 'registered successfully' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { Welcome, Register }