import mongoose  from "mongoose";
const ContactSchema = new mongoose.Schema({
    name : {type:String,required:true},
    emailAddress: {type:String,required:true},
    phoneNumber : {type:String,required:true},
    enterQuestion : {type:String,required:true}


})

export const ContactModel = mongoose.model("contac",ContactSchema)

export default ContactModel