const express =require('express');

const app=express();

require('./db/connection');

const Users=require('./models/Users')

const port=process.env.PORT||8000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.send("Belcome Guys")
})  
app.post('api/register',async(req,res)=>{
    try{
        const {fullName,email,password}=req.body;
        if(!fullName|| !email||!password){
            res.status(400).send('please fill all the required fields')
        }else{
            const isAlreadyExist= await Users.findOne({email})
        }

    }catch(error){

    }
})

app.listen(port,()=>{
    console.log("listening on port"+port);
})