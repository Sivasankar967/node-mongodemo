require('dotenv').config();
const express= require('express');
const mongoose =require('mongoose');
const routes = require('./routes/routes');
// const bodyParser = require('body-parser');

const app = express();
const mongoString=process.env.DATABASE_URL

mongoose.connect(mongoString);
const databse=mongoose.connection;

databse.on('error',(error)=>{
console.log(error)
});
databse.once('connected',()=>{
    console.log('database connected');
})
app.use('/api',routes);




app.listen(3000,()=>{
    console.log(`server started ${3000}`)
})