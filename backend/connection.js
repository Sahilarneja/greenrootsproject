const {default:mongoose}=require('mongoose');
require('dotenv').config();


const url = process.env.DATABASE_URL;
const connection=()=>{
    mongoose.connect(url).then(()=>{
        console.log("connected to database");
    }).catch((error)=>{
        console.log("error connecting to database",error);
    })
}

module.exports=connection;