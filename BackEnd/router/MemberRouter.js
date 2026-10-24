import express from "express"
import { adminLogin, admissionDetail, allCourses, contact, enrollment, loginMember, memberEditProfile, memberFeedback,  registration } from "../controller/MemberController.js"
import { imageUpload } from "../middleware/ImageUploadMiddleware.js"
const MemberRouter = express.Router()

MemberRouter.post("/feedback",memberFeedback)
// MemberRouter.post("/login",memberLogin)
MemberRouter.post("/contact",contact)
MemberRouter.post("/loginAdmin",adminLogin)
MemberRouter.post("/registration",registration)
MemberRouter.post("/loginMember",loginMember)
MemberRouter.get("/allCourses",allCourses)
MemberRouter.put("/editProfile",memberEditProfile)
MemberRouter.post("/enrollment",imageUpload,enrollment)//using middle ware
MemberRouter.get("/admissionDetail",admissionDetail)





export default MemberRouter
