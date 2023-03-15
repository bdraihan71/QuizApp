const express = require("express")
const userRouter = express.Router()

userRouter.get('/user/:id',(req, res)=>{
    res.send(req.params.id)
})

module.exports = userRouter