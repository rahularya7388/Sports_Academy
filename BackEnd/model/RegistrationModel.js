import mongoose  from "mongoose";
const RegistrationSchema = new mongoose.Schema({
    emailAddress : {type:String,required:true, unique : true},
    password: {type:String,required:true},
    name : {type:String,required:true},
    phoneNumber : {type:String,required:true}


})

export const RegistrationModel = mongoose.model("registration",RegistrationSchema)

export default RegistrationModel