// const express=require('express')
// const app=express()
// app.use(express.json())
// let users=[{}]
// // get all users
// app.get('/users',(req,res)=>{
//     res.json(users)
// })
// app.post('/users',(req,res)=>{
//     const newUser={id:users.length+1, ...req.body}
//     users.push(newUser)
//     res.status(201).json(newUser)
// })
// app.listen(2000,()=>console.log(' server is runninig in the port of 2000'))
const express=require('express')
const app=express()
app.use(express.json())
let users=[]
//get all users
app.get('/users',(req,res)=>{
    res.json(users)
}) 
app.post('/users',(req,res)=>{
const newUser={id:users.length+1, ...req.body}
    users.push(newUser)
    res.status(201).json(newUser)
})
//UPDATE--PUT()
app.put('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id === parseInt(req.params.id))
    if(!user) return res.status(404).json({message:"user not found"})
        user.name=req.body.name || user.name
    user.email=req.body.email || user.email
    res.json(user)
})
//DELETE
 app.delete('/users/:id',(req,res)=>{
    users=users.filter(user=>user.id !==parseInt(req.params.id))
    res.json({message:'user deleted'})
 })
 app.listen(2000,()=>console.log("server is in the port of 2000"))