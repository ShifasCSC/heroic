import userSchema from "./models/user.model.js"

export async function setUser(req,res){
    try{
const {username,email,phone,designation}=req.body
if(!(username,email,phone,designation))
    return res.status(400).send({msg:"input fields are empty"})
const undo=await userSchema.findOne({email})
if(undo)
    return res.status(400).send({msg:"user already exist"})
await userSchema.create({email,username,phone,designation})
res.status(201).send({msg:"user profile created sucessfully"})
}catch(error){
        return res.status(500).send({msg:"failed to create user profile",error})
        console.log(error);
    }
}


export async function getUser(req,res){
    try{
const {_id}=req.params
const undo=await userSchema.findOne({_id})
if(!undo){
    return res.status(400).send({msg:"user not found"})

}else{
    
    res.status(200).send({msg:"user profile finded sucessfully",undo})
}

}catch(error){
        return res.status(500).send({msg:"failed to return user data",error})
        console.log(error);
} 
    }


export async function getUsers(req,res){
    try{
const undo=await userSchema.find()
res.status(200).send({undo})
}catch(error){
        return res.status(500).send({msg:"failed to find users data",error})
        console.log(error);
}  
    }


export async function editUser(req,res){
    try{
        const {_id}=req.params
const {username,email,phone,designation}=req.body
const undo=await userSchema.findOne({_id})
if(!undo)
    return res.status(400).send({msg:"id is not received"})
const user= await userSchema.findByIdAndUpdate(_id,{email,username,phone,designation},{new:true})
res.status(200).send({msg:"user profile edited sucessfully",user})
}catch(error){
        return res.status(500).send({msg:"failed to create user profile",error})
        console.log(error);
} 
    }


export async function deleteUser(req,res){
    try{
const {_id}=req.params

const undo=await userSchema.findOne({_id})
if(!undo){
    return res.status(400).send({msg:"user id not find"})
    
}else{
    const del=await userSchema.deleteOne({_id})

    res.status(200).send({msg:"user profile deleted sucessfully"})
}
}catch(error){
        return res.status(500).send({msg:"failed to delete user profile",error})
        console.log(error);
        
    }
}