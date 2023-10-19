import express from 'express';

const router = express.Router();



import {createSession,getSessionsbygroup,getSessionsbyteacher,deleteSession,updateSession} from "../controllers/sessions/sessions.js"




router.get("/",getSessionsbyteacher)
router.post("/",createSession)
router.delete("/:id",deleteSession)
router.patch("/:id",updateSession)

export default router ;
