import express from "express"


import uploadstudents from "../controllers/students/uploadstudents.js"
import updatestudent from "../controllers/students/updatestudent.js"

const router = express.Router()

router.get("/upload", uploadstudents)
router.post("/update",updatestudent)

export default router
