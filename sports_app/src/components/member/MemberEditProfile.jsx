import axios from "axios"
import MemberHeader from "./MemberHeader"
import { useState } from "react"

function MemberEditProfile()
{
    const APIURL ="http://localhost:3000/member/editProfile"

    const MemberObj = JSON.parse(localStorage.getItem("memberInfo")) // fetching member object
    //JSON.parse() convert string to json object

    const[data,setData] = useState({name :MemberObj.name,phoneNumber:MemberObj.phoneNumber})

    function fetchData(e){
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitForm= async(e)=>{
        e.preventDefault()


        try{
            const params = {emailId:MemberObj.emailAddress}
            const serverResponse = await axios.put(APIURL,data,{params})

            console.log(serverResponse.data.status);

            const updateStatus = serverResponse.data.status.modifiedCount
            if(updateStatus>0){
                alert("Profile updated successful👍")
            }

        }

        catch(error){
            console.log(error)
        }

    }




    return(
        <>
        <MemberHeader/>

        <h1  style={{marginTop:"100px", textAlign:"center", fontFamily:"cursive", color:"blue"}}>📝Edit Your Profile Data Here🖋️</h1>
        <h5 style={{marginTop:"100px",textAlign:"center", fontFamily:"cursive", color:"blue"}}>Use Your Email : {MemberObj.emailAddress}</h5>

        <form onSubmit={submitForm}>

        <div className="w-25 mt-4 mx-auto">

            <div className="mb-3"> 
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" name="name" className="form-control" required value={data.name} onChange={fetchData}/>
            </div>

            <div className="mb-3">
                <label htmlFor="phonenumber" className="form-label">Phone Number:</label>
                <input type="tel" name="phoneNumber" className="form-control" required value={data.phoneNumber} onChange={fetchData}/>
            </div>

            <div className="text-center">
                <button className="btn btn-success">Edit Profile</button>
            </div>



        </div>
        </form>
       

        
        
        </>
    )
}
export default MemberEditProfile