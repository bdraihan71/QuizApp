const Qustion = require("../models/questionModels")
 
 
 const questionController =  (req, res)=>{
    res.send("This is question Router")
}
const createQuestionController = async(req, res)=>{
    let {name, description} = req.body
    try {
        let data = new Qustion({
            name,
            description
        })
        let newData = await data.save()
        res.status(200).json({
            message: "data is saved",
            data: newData
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}
module.exports = {questionController, createQuestionController, }