import mongoose from "mongoose";
import CourseModel from './CourseModel.js';
const NoticeSchema = new mongoose.Schema({
 
  content: {
    type: String,
    maxlength: 13,
    required: true
  },
  

 
}, {
  timestamps: true
});

const NoticeModel = mongoose.model('Notice', NoticeSchema);

export default NoticeModel;

