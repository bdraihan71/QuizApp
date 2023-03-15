
const express = require("express")
const userRouter = require("./userRoute")
const subjectRouter = require("./subjectRouter")
const mainRouter = express.Router()

mainRouter.use(userRouter)
mainRouter.use(subjectRouter)

module.exports = mainRouter