const express=require('express')
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
const connectDb =require("./Config/db")
connectDb()


app.get("/get",(req,res)=>{
    const data={name:"veera",city:"Kakinada"}
    res.send(data)
})
















app.listen(7777,()=>{
    console.log("Server Running at 7777")
})