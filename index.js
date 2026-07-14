const express=require('express')
let todo=require('./todo.json')
const app=express()

app.use(express.json())


app.get('/todos',(req,res)=>{
    res.status(200).json({
        suuccess:true,
        data:todo
    })
})

app.post('/todos',(req,res)=>{
    let newItem={
    "userId": 1,
    "id": 9,
    "title": "illo expedita consequatur quia in",
    "completed": false
  }
   todo=[...todo,newItem]
//   todo.push(newItem)
    
      res.status(201).json({
        success:true,
        data:todo
      })  
    
})



const port=3000;

app.listen(port,()=>{
    console.log("server has been runned")
})