import express from'express'
import cors from 'cors'
import { connectDB } from './Configure/db.js';
import userroute from './Routers/UserRoute.js';
import "dotenv/config.js"
// import { connectDB } from './Configure/db.js';





const app= express();
const port= 4000;


app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Run");
})

app.use("/api/user",userroute)

connectDB();

app.listen(port,()=>{
    console.log(`Server is Runing on ${port}`);
})


//mongodb+srv://Gen-Health-Hub:Viit@1223334444@cluster0.xx1um6u.mongodb.net/?