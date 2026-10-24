import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({

        name: {type:String,required:true},
        email: {type:String,required:true},
        review: {type:String, required:true},
        EnterYourResponse:{type:String,required:true},
        rating:{type:String,required:true}
})
export const FeedbackModel = mongoose.model("memberFeedback",feedbackSchema)

export default FeedbackModel