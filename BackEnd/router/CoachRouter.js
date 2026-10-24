import express from "express"
import { coachLogin } from "../controller/CoachController.js" 
const CoachRouter = express.Router()
CoachRouter.post("/coachLogin",coachLogin)


export default CoachRouter
