import express from "express"
import { getGroup,getGroupByBranch } from "../controllers/groups/getgroup.js"
import { getGroups } from "../controllers/groups/getgroups.js"

const router=express.Router()


router.get("/getgroups",getGroups)
router.post("/",getGroup)

router.post("/groupsbybranch",getGroupByBranch)


export default router