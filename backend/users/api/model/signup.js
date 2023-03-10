// Model -> A file which contains the structure and type of the data to be written in the DB (Schema)
// Schema -> To know the amount of data | Data type of all the incoming data

const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fname:mongoose.Schema.Types.String,
    lname:mongoose.Schema.Types.String,
    email: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    newPassword : mongoose.Schema.Types.String
})

module.exports = mongoose.model('Signup', signupSchema)