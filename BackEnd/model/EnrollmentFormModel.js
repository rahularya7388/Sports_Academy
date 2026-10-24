import mongoose from "mongoose";
import CourseModel from './CourseModel.js';
const EnrollmentFormSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CourseModel, // Reference to Course model
    required: true
  },
  emailAddress: {
    type: String,
    maxlength: 60,
    required: true,
     },
  fullName: {
    type: String,
    maxlength: 60,
    required: true
  },
  dateOfBirth: {
    type: String,
    maxlength: 10,
    required: true
  },
  phoneNumber: {
    type: String,
    maxlength: 13,
    required: true
  },
  city: {
    type: String,
    default: "",
    required:true
  },
 
  address: {
    type: String,
    require:true
  },

   

   transactionNo: {
    type: String,
    default: ""
  },


    imageFile: {
    type: String,
    required: true
  },

  admissionStatus: {
    type: String,
    default: "pending"
  },
 
}, {
  timestamps: true
});

const EnrollmentFormModel = mongoose.model('EnrollmentForm', EnrollmentFormSchema);

export default EnrollmentFormModel;

