const {Schema, model} = require("mongoose")

const subjectSchema = new Schema({
    name : {
       type : String,
       required : true,
       trim : true
    },
    description : {
        type : String,
        trim : true
    }
})
const Subject = model("Subject", subjectSchema)
module.exports = Subject

