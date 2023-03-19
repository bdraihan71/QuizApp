const express = require("express")
const { createQuestionController, questionController } = require("../controllers/questionController")

const questionRouter = express.Router()

questionRouter.get('/question', questionController)

questionRouter.post('/question', createQuestionController)

module.exports = questionRouter