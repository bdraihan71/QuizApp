
const express = require("express")
const userRouter = require("./userRoute")
const subjectRouter = require("./subjectRouter")
const questionRouter = require("./questionRouter")
const mainRouter = express.Router()

mainRouter.use(userRouter)
mainRouter.use(subjectRouter)
mainRouter.use(questionRouter)

module.exports = mainRouter