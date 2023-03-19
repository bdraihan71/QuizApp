const {Schema, model} = require("mongoose")

const questionSchema = new Schema({
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
const Question = model("question", questionSchema)
module.exports = Question

