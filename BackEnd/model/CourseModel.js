import mongoose  from "mongoose";
const CourseSchema = new mongoose.Schema({
    courseName : {type:String,required:true, unique : true},
    courseDuration: {type:String,required:true},
    courseFees : {type:String,required:true},
    sportsName : {type:String,required:true},
    description : {type:String,required:true}


})

export const CourseModel = mongoose.model("Course",CourseSchema)

export default CourseModel