import express from "express"

const router = express.Router()

import {getsubjects} from "../controllers/subjects/getsubjects.js"

router.get("/getsubjects", getsubjects)

export default router