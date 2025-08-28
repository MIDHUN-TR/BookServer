const Users = require('../Schema/UserSchema')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')

export const Userreg = async(req,res)=>{
    try{
        const {name,email,password} = req.body
    const Existing  = await Users.findOne(email)
    if(Existing){
        res.status(400).json("user Already Exists")
    }
    else{
        const hashPassword = bcrypt.hash(password,10)
        const newUser  = new Users({name,email,password:hashPassword})
        await Users.save()
        res.status(200).json({message:"User Saved Successfully",newUser})
    }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
}

export const Userlog = async(req,res)=>{
    try{
        const {email,password} = req.body
        const Existing = await Users.findOne({email})
        const compare  = await bcrypt.compare(password,Existing.password)
        if(compare){
            const token = jwt.sign(userId.Existing._id,process.env.secretKeyForAuth)
            res.status(200).json({token,Existing})
        }
        else{
            res.status(404).json("Wrong Email and password")
        }

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}