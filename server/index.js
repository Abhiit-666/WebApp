import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

//initializing express app
const app=express();


//bodyparser setup to sen requests.
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postRoutes);
//connecting to db //mongodb
const CONNECTION_URL='mongodb+srv://abhijit:BinaryBug12@cluster0.zhnrv.mongodb.net/?retryWrites=true&w=majority'
const PORT= process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL,{   useNewUrlParser: true,
    useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
.catch((error)=> console.log(error.message));

//mongoose.set('useFindAndModify',false);