import express from "express"
import { getGroup } from "../controllers/groups/getgroup.js"

const router=express.Router()



router.post("/",getGroup)

export default router