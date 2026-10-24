import express from "express"
import { addCourse, allContact, allFeedbacks, allRegistration, deleteContact, deleteFeedback, deleteMember, pendingAdmission, updateAdmission, allConfirmAdmission,addNotice } from "../controller/AdminController.js"
const AdminRouter = express.Router()
AdminRouter.post("/addCourse",addCourse)
AdminRouter.get("/allFeedBacks",allFeedbacks)
AdminRouter.get("/allContacts",allContact)
AdminRouter.get("/allMemberRegistration",allRegistration)
AdminRouter.delete("/deleteContact",deleteContact)
AdminRouter.delete("/deleteFeedback",deleteFeedback)
AdminRouter.delete("/deleteMember",deleteMember)
AdminRouter.get("/pendingAdmission",pendingAdmission)
AdminRouter.put("/updateAdmission",updateAdmission)
AdminRouter.get("/allConfirmAdmission",allConfirmAdmission)
AdminRouter.get("/addNotice",addNotice)


export default AdminRouter
