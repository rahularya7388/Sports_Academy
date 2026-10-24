import express from 'express'
import cors from 'cors'
import MemberRouter from './router/MemberRouter.js'
import AdminRouter from './router/AdminRouter.js'
import CoachRouter from './router/CoachRouter.js'
import { dbConnect } from './database/dbInfo.js'
const serverApp = express()
const PORTNUMBER = 3000
serverApp.use(cors())
serverApp.use(express.json()) // json is data exchange format
serverApp.use(express.static("public"))// all static content like images/pdf,video

// call the function to connect with Database
dbConnect()

serverApp.use("/member",MemberRouter)
serverApp.use("/component",MemberRouter)
serverApp.use("/registrationlogin",MemberRouter)
serverApp.use("/admin",AdminRouter)
serverApp.use("/coach",CoachRouter)
serverApp.use("/login",MemberRouter)


serverApp.listen(PORTNUMBER,()=>{
    console.log(`server is listening on http://localhost:${PORTNUMBER}`)


})