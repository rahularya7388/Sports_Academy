import ContactModel from "../model/ContactModel.js";
import CourseModel from "../model/CourseModel.js";
import EnrollmentFormModel from "../model/EnrollmentFormModel.js";
import FeedbackModel from "../model/FeedbackModel.js";
import RegistrationModel from "../model/RegistrationModel.js";


//create view noticeCode


// Member specific admissionDetails
export const admissionDetail = async(request,response)=>{

    try{
        const email = request.query.memEmail // fetching value from params
        
        
        const admissionData = await EnrollmentFormModel.find({emailAddress:email})
        .populate("course")// populate courese details also
        //admission data is an array of object(EnrollmentModel)

        response.json({"details":admissionData})

    }
    catch(error){
        console.log(error)
    }
}

//enrollmentForm function
export const enrollment = async(request,response)=>{

    const clientData = request.body
    const {course,emailAddress,fullName,phoneNumber,city, address, dateOfBirth,transactionNo} = clientData
    const imageName = request.file? request.file.filename:'';
    console.log(`image path is ${request.file.path}`);
    console.log(`image name is ${imageName}`);
    try{
        const formDoc = new EnrollmentFormModel(
            {
                course,
                emailAddress,
                fullName,
                phoneNumber,
                city,
                address,
                dateOfBirth,
                transactionNo,
                imageFile:imageName
            }

        )
        
    await formDoc.save()//document save in enrollment Form Collection
    response.json({"message":"Thank You for Enrollment"})

    }
    catch(error){
        console.log(error);
        
    }

}


// Member edit Profile

export const memberEditProfile = async(request,response)=>{
const newData = request.body // will get name and phone

const {name,phoneNumber} = newData
const email = request.query.emailId //request.query is an object and emailId is the key
try{
    const filterCondition = {emailAddress:email}

    const modifiedData = {
        $set:{
            name:name,
            phoneNumber:phoneNumber

    }}
        
    const updateStatus = await RegistrationModel.updateOne(filterCondition,modifiedData)
    response.json({"status":updateStatus})


}
catch(error){
    console.log(error)
}

}




export const allCourses =async(request,response)=>{

    try{
        const courseArray = await CourseModel.find()
        response.json({"allCourses":courseArray})
    }

    catch(error){
        console.log(error)
    }

}







 export const memberFeedback= async(request,response)=>{         
    const clientData = request.body //fetching object data from react
     
     const  {name,email,review,EnterYourResponse,rating} = clientData // object destructuring 
       console.log(name);
       console.log(email);
       console.log(review);
       console.log(EnterYourResponse);
       console.log(rating);

       try{
        const FeedbackDoc = new FeedbackModel({
            name : name , // LHS model attributes/fields
            email: email, // RHS frontEnd object attribute after destructuring
            review :review,
            EnterYourResponse : EnterYourResponse ,
            rating:rating

        }) // document created
        await FeedbackDoc.save() // saving document into feedback collection
        console.log("Feedback added  Successfully")
        response.send({"message": "Feedback Added Successfully"})
       }


       catch(error){
      console.log(error);
        

       }


 }


export const contact = async(request,response) =>{
    const clientData = request.body
    const {
        name,
        emailAddress,
        phoneNumber,
        enterQuestion,
    }= clientData

    console.log("Name is :"+name);
    console.log("emailAddress is :"+emailAddress);
    console.log("Phone Number is :"+phoneNumber);
    console.log("enterQuestion is :"+enterQuestion);

    try{
        const ContactDoc = new ContactModel({
        name:name,
        emailAddress:emailAddress,
        phoneNumber:phoneNumber,
        enterQuestion:enterQuestion


        })
        await ContactDoc.save()
        console.log("Contact Added Successfully")
        response.json({"message":"Contact added successfully"})


    }
    catch(error){
        console.log(error)
    }

}

export const registration = async (request,response)=>{
    const clientData = request.body

    const{
        emailAddress,
        password,
        name,
        phoneNumber

    } = clientData
    console.log("emailAddress is :"+emailAddress);
    console.log("Password is :"+password);
    console.log(" Name is :"+name);
    console.log("Phone Number is :"+phoneNumber);

     try{
        const RegistrationDoc = new RegistrationModel({

        emailAddress:emailAddress,
        password:password,
        name:name,
        phoneNumber:phoneNumber


        })
        await RegistrationDoc.save()
        console.log("Registration Added Successfully")
       response.json({"message":"Registration added successfully"})


    }
    catch(error){
        console.log(error)
    }


}
// export const memberLogin = (request,response)=>{
//      response.send("<h1> Login Done Successfully <h1/>")
// }

export const adminLogin =(request,response) =>{
    const clientData = request.body

    const { username, password} = clientData
    console.log("Username is"+username)
    console.log("Password is"+password)

    if (username ==="admin@gmail.com" && password === "admin")

    response.json({"message":"Welcome Admin","token": username, "status":"Ok"})

    else 
        response.json({"message" : "Invalid Credentials","status":"Error"})
}

export const loginMember =  async(request,response) =>{
    const clientData = request.body

    const { username,password} = clientData

    try{
        //*select *from member where username = username and password = password

        const MemberDoc=  await RegistrationModel.findOne({ emailAddress: username,password:password})
        if(MemberDoc!= null){

            response.json({"message":"Login Successful","memberToken":MemberDoc,"status":"Ok"})
        }

        else {
            response.json({"message":"☹️😟Invalid Credentials😔"})
        }

    }

    catch(error){
        console.log(error);
        

    }


    console.log("UserId is"+username)
    console.log("Password is"+password)

    if(username === "member@gmail.com" && password==="member")

        response.json({"message": "Welcome Member🙏", "token":username, "status":"Ok"})

        else
            response.json({"message":"Invalid userId"})

}