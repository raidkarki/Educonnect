import express from "express"


import uploadteachers from "../controllers/teachers/uploadteachers.js"
import {updateteacher,addsubjects} from "../controllers/teachers/updateteacher.js"
import signin from "../controllers/auth/signin.js"


const router = express.Router()
router.post("/login",signin)
router.get("/upload", uploadteachers)
router.post("/addsubjects", addsubjects)

router.post("/update",  updateteacher)

export default router