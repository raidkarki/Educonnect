import express from "express"
import bodyparser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import students from "./routes/students.js"
import teachers from "./routes/teachers.js"
import group from "./routes/groups.js"
import sessions from "./routes/sessions.js"
import subjects from "./routes/subjects.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

const url=process.env.MONGO_URL

app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("hello bachiri")
})

app.use("/students", students  )
app.use("/teachers", teachers )
app.use("/subjects", subjects   )
app.use("/groups",   group)
app.use("/sessions", sessions)





mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{app.listen(process.env.PORT || 5000, () => console.log("server is running"))})
.catch((error)=>console.log(error.message)) 


