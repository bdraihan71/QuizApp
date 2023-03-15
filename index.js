const express = require("express")
const mainRouter = require("./routes/mainRouter")
const config = require("./config/config")


require("./config/db")
const app = express()

const PORT = config.app.port

app.use(express.json())
app.get('/', (req,res)=>{
    res.send("HI hello")
})
app.use(mainRouter)
app.listen(PORT, (req, res)=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})