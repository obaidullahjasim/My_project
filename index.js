const express = require("express")
const app = express()
const port = 3001

// app.get('/',(req,res)=>{
//     res.send("Hello world!")
// })

app.get('/',(req,res)=>{
    res.send("Get response")
})

app.post('/iteam',(req,res)=>{
    res.send("Got The Post")
})

app.put('/iteam/:id',(req,res)=>{
    res.send("Response Put")
})

app.delete('/iteam/:id',(req,res)=>{
    res.send("Response Got Delete")
})

app.listen(port,()=>{
    console.log(`example the app is running on port${port}`)


})