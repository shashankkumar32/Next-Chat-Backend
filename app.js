const express =require('express');

const app=express();
const bcryptjs=require('bcryptjs')

require('./db/connection');

const Users=require('./models/Users')

const port=process.env.PORT||8000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.send("Belcome Guys")
})  
app.post('/api/register',async(req,res,next)=>{
    try{
        const {fullName,email,password}=req.body;
        if(!fullName|| !email||!password){
            res.status(400).send('please fill all the required fields')
        }else{
            const isAlreadyExist= await Users.findOne({email})

            if(isAlreadyExist){
                res.status(300).send("user Already exist")
            }else{
                const newUser=new Users({fullName,email})
                bcryptjs.hash(password,10,(err,hashedPassword)=>{
                    newUser.set('password',hashedPassword);
                    newUser.save()
                    next();
                })
                return res.status(200).send("User Registered Sucessfully")
            }
        }

    }catch(error){

    }
})

app.listen(port,()=>{
    console.log("listening on port"+port);
})