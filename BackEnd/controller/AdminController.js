import CourseModel from "../model/CourseModel.js";
import FeedbackModel from "../model/FeedbackModel.js";
import ContactModel from "../model/ContactModel.js";
import RegistrationModel from "../model/RegistrationModel.js";
import EnrollmentFormModel from "../model/EnrollmentFormModel.js";
import NoticeModel from "../model/NoticeModel.js";

// addNotice
export const addNotice = async(request,response)=>{
    try{
        const clientData = request.body
        const{content} = clientData
        const noticeDoc = new NoticeModel({content:content})
        await noticeDoc.save()
        response.json({"message":"Notice added successfully"})

    }
    catch(error){
        console.log(error);
        
    }
}

// allConfirm Admission
export const allConfirmAdmission= async(request,response)=>{
    try{
        //find all enrollment forms where admission status ="confirm"
        const confirmAdmissionData = await EnrollmentFormModel.find({admissionStatus:"confirm"})
        .populate("course")// populate course details also
        .sort({createdAt:-1}); // latest first in descending oreder
        response.json({"confirmAdmissionData":confirmAdmissionData})


    }
    catch(error){
        console.log("Error fetching confirm admission",error)
    }

}
// Update Admission

export const updateAdmission = async(request,response)=>{
    const aId = request.query.admissionId // fetching param value
    console.log(`admission id is ${aId}`)
    //update Enrollment set admissionStatus = 'confirm' where _id=aId

    try{
        const obj = await EnrollmentFormModel.findOne({_id:aId})
        const phone = obj.phoneNumber
        console.log(phone)
        const filterCondition ={
            _id:aId
        }

        const modifiedDoc ={
            $set:{
                admissionStatus:"confirm"
            }

        }

        const updateStatus = await EnrollmentFormModel.updateOne(filterCondition,modifiedDoc)
        response.status(200).json({"status":updateStatus,"phone":phone})

        //try closed
        

    }
    catch(error){
        console.log(error)
    }
}

//View Pending admissions

export const pendingAdmission= async(request,response)=>{
    try{
        //find all enrollment forms where admission status ="pending"
        const pendingAdmissionData = await EnrollmentFormModel.find({admissionStatus:"pending"})
        .populate("course")// populate course details also
        .sort({createdAt:-1}); // latest first in descending oreder
        response.json({"pendingAdmissionData":pendingAdmissionData})


    }
    catch(error){
        console.log("Error fetching pending admission",error)
    }

}// closed function



//delete contact code-->

export const deleteContact = async(request,response)=>{
    const id = request.query.cId
    console.log("id is "+id)

    try{
       const deleteStatus = await ContactModel.findByIdAndDelete(id)
       console.log(deleteStatus)
       if(deleteStatus != null)
       response.json({"message":"contact Deleted Successfully "})


        
    }
    catch(error){
        console.log(error)
    }

}

export  const deleteFeedback = async(request,response)=>{
    const id = request.query.fdId
    console.log("id is "+id)

    try{
        const deleteStatus= await FeedbackModel.findByIdAndDelete(id)
       console.log(deleteStatus)
        if(deleteStatus !=null)
       response.json({"message":"Feedback Deleted Successfully "})


    }

    catch(error){
        console.log(error);
        
    }


}

export const deleteMember = async(request,response)=>{
    const id = request.query.memberId
    console.log("Id is "+id)
    
    try{
        const deleteStatus = await RegistrationModel.findByIdAndDelete(id)
        console.log(deleteStatus)
        if(deleteStatus != null)
            response.json({"message":"Member delete Duccessfully"})

    }
    catch(error){
        console.log(error);
        
    }

}




//Method for allFeedback

// export const pendingAdmissionData = async(request,response)=>{
//     try{
//         const pendingArray = await EnrollmentFormModel.find()
//         response.json({"pendingData":pendingArray})



//     }

//     catch(error){
//         console.log(error);
        
//     }
// }


export const allFeedbacks = async(request,response)=>{
    try{
        const feedBackArray = await FeedbackModel.find() // It will fetch data from feedback collection
        // Select *from feedback
        // feedback Array  Contains document containing object with name,email,review rating

        response.json({"allfeedbacks" : feedBackArray})


    }
    catch(error)
    {
        console.log(error);
        
    }


}

export const allContact = async(request,response)=>{
    try{
        const contactArray =await ContactModel.find()

        response.json({"allcontacts" :contactArray})
    }
    catch(error)
    {
        console.log(error);
    }
}



export const allRegistration =  async(request,response)=>{
    try{
        const registrationArray = await RegistrationModel.find()
        response.json({"allMemberRegistrations":registrationArray})

    }

    catch(error){
        console.log(error)
    }

}


export const addCourse = async (request, response) =>{
    const  clientData = request.body

    const {
        courseName,
        courseDuration,
        courseFees,
        sportsName,
        description,

    }  = clientData

    console.log("courseName is "+courseName);
    console.log("courseDuration is "+courseDuration);
    console.log("courseFees is "+courseFees);
    console.log("SportsName is "+sportsName);
    console.log("Description is "+description);

    try{
        const CourseDoc = new CourseModel({
        courseName:courseName,
        courseDuration:courseDuration,
        courseFees:courseFees,
        sportsName:sportsName,
        description:description


        })
        await CourseDoc.save()
        console.log("Course Added Successfully");
        response.json({"message":"course added successfully"})

    }
    catch(error){
    console.log(error)
    }

}