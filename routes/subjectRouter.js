const express = require("express")
const { subjectController, createSubjectController } = require("../controllers/subjectController")
const subjectRouter = express.Router()

subjectRouter.get('/subject', subjectController)

subjectRouter.post('/subject', createSubjectController)

module.exports = subjectRouter