const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Signup = require('../model/signup')

router.get('/', (req,res)=>{
    res.status(200).json( {msg:'GET request to /users/signup'})
})

router.post('/', (req,res) =>{
    // res.status(200).json( {msg:'POST request to /users/signup'})
    // Expecting the userId and userPassword from the user to write in the DB
    // const variable = req.body.propertyNameFromRequest

    // NOTE  ---> by default , NodeJS does not have access to request.body
    // why -- cuz the body type can be of any type
    // therefore , we will use a middleware called body-parser
    
        // Store the value of userEmail & userPassword in the database
        const user = new Signup({
            _id: new mongoose.Types.ObjectId(),
            fname:req.body.fname,
            lname : req.body.lname,
            email: req.body.email,
            password: req.body.password
        })

        Signup.find( {email: req.body.email} )
          .then( result => {
            // if the email does not exist in the DB
            if(result.length===0){
                user.save()
                .then(result => res.status(201).json( {message: 'User Created', userDetails: result} ))
                .catch(error => res.status(500).json( {message: 'error occured in the DB', err: error} ))
                // here the type of res is a normal object 
            }else{
                res.status(400).json({ mesaage: ' Email alreadt exits, try using different email'})
            }
          })
          .catch(error => res.status(500).json({message:'error occuured in the DB', err:error}))
    

})

router.patch('/', (req,res) =>{
    const userEmail = req.body.email;
    const userOldPasword = req.body.password;
    const userNewPassword = req.body.newPassword;

    Signup.find({email:userEmail})
     .then(result=>{
         if(result.length === 0){
            res.status(400).json({message:"User does not exist"})
         }else{
            if(result[0].password === userOldPasword){
                updatedUser = {
                    _id:result[0]._id,
                    email:result[0].email,
                    password : userNewPassword
                }
                Signup.findByIdAndUpdate(result[0]._id, updatedUser)
                   .then(updatedResult => res.status(200).json({message:"User details updated", update : updatedResult}))
                   .catch(err => res.status(500).json({message:'err occured in the DB', error:err}))
                
            }else{
                res.status(400).json({message:"Authentication Failed"})
            }
         }
     })
     .catch(err => res.status(500).json({message:'err occured in the DB', error:err}))

})

router.delete('/', (req,res) =>{
    // res.status(200).json( {msg:'POST request to /users/signup'})
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    Signup.find({email:userEmail})
      .then(result => {
        if(result.length === 0){
            res.status(400).json({message:"User does not exist"})
        }else{
            if(result[0].password === userPassword){
                const userId = result[0]._id;
                Signup.remove({_id : userId})
                .then((response => res.status(200).json({message:'Delete successful', document:response })))   
                .catch((err)=>res.status(500).json({message:'Server error', error:err}))

            }else{
                res.status(400).json({message:"Authentication Failed"})
            }
        }
      })
})

module.exports = router;