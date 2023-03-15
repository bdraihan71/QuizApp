const Subject = require("../models/subjectModels")
 
 
 const subjectController =  (req, res)=>{
    res.send("This is subject Router")
}
const createSubjectController = async(req, res)=>{
    let {name, description} = req.body
    try {
        let data = new Subject({
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
module.exports = {subjectController, createSubjectController}