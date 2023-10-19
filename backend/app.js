import express from "express"
import bodyparser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import students from "./routes/students.js"
import teachers from "./routes/teachers.js"
import group from "./routes/groups.js"
import sessions from "./routes/sessions.js"


const app = express()
const url="mongodb+srv://karkiraid35:l4RRQ6nfoLEiUzbB@cluster0.dm2zxmd.mongodb.net/educonnect"

app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("hello bachiri")
})

app.use("/students", students )
app.use("/teachers", teachers )
app.use("/groups",group)
app.use("/sessions",sessions)





mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    app.listen(process.env.PORT || 5000, () => console.log("server is running"))})
.catch((error)=>console.log(error.message)) 


