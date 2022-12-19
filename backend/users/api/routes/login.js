const express = require('express');
const router = express.Router();
const Signup = require('../model/signup')

// URL -> /users/login
router.get('/', (req,res)=>{
    // res.status(200).json( {msg:'GET request to /users/login'})
    Signup.find()
    .then(result => res.status(200).json({ message:'Users List', user:result }))
    .catch(err => res.status(500).json({message:'Server error', error:err}) )
})

// PATH -> /users/login/userId
//Request Parameters ---> Parameters which are passed in the URL for the API
// aka Query parameter means variable value is passed in url
router.get('/:userId',(req,res)=>{
    res.status(200).json( {msg:`Got a request for /users/login/${req.params.userId}`})
})

router.post('/', (req,res) =>{
// when u get the userEmail and userPassword, u will check if the email exists in the DB entries and if it does then does the password match
// if the passowrd matches then the auth is successful , else u will send him error

    const userEmail = req.body.email
    const userPassword = req.body.password

    // if u r only using find() and isn't passing anything then it will return a res array which will contain all the entries | Type(res) = array

    // passing a predicate in find method , to filter out emails
    // u can filter email, pass and id
    // Signup.find({dbPoperty : userDefinedProperty})  similar to dbProperty === userDefinedProperty
    
    Signup.find( {email:userEmail} )   // or email : req.body.email
        .then( result => {
            // res.status(200).json( {entries: result}   )   // Type(result) = array || return id, email, password
            // no of entries in result will be only 1 cuz 1 email id will have 1 single sign up , right

            if(result.length === 0){
                res.status(400).json( {message: 'User does not exist, try again with a different email'}   ) 
            }else{
                if(result[0].password === userPassword){
                    res.status(200).json( {message: 'Auth Successful'}   ) 
                }else{
                    res.status(400).json( {message: 'Auth Unsucessful, check your password'}   ) 
                }
            }
        })
        .catch(err => res.status(500).json( {messgae: 'Datatbase Error', error: err} ))
})

router.patch('/', (req,res) =>{
    res.status(200).json( {msg:'POST request to /users/login'})
})

router.delete('/', (req,res) =>{
    res.status(200).json( {msg:'POST request to /users/login'})
})

module.exports = router;