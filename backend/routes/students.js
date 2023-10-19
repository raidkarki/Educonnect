import express from "express"


import uploadstudents from "../controllers/students/uploadstudents.js"
import updatestudent from "../controllers/students/updatestudent.js"
import {getStudents} from "../controllers/students/getList.js"

const router = express.Router()


router.post("/update", updatestudent)
router.get("/list/", getStudents)

router.get("/upload", uploadstudents)


export default router
