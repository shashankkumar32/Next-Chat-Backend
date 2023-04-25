const mongoose = require('mongoose')

const url ='mongodb+srv://shashankthestar3:qTPezNUp3s0RLd1G@cluster0.e6no42n.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}) .then(()=>console.log("connected to DB")).catch((e)=>console.log("ERrror",e))