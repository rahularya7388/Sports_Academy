import axios from "axios"
import { useEffect, useState } from "react"
import AdminHeader from "./AdminHeader"

function PendingAdmission(){
    const APIURL = "http://localhost:3000/admin/pendingAdmission"
    const UpdateURL = "http://localhost:3000/admin/updateAdmission"

    const[pendingData,setPendingData] = useState([])
    const fetchData = async()=>{
        try{
            const serverResponse = await axios.get(APIURL)
            const pendingDatas = serverResponse.data.pendingAdmissionData
            setPendingData(pendingDatas)
            console.log(pendingDatas)

        }

        catch(error){
            console.log(error)
        }
        
    }

    useEffect(()=>{
        fetchData()
    },[])

    const confirmAdmission= async(admissionId)=>{
        alert(admissionId)
        try{
            const params = {admissionId:admissionId}

            // second parameter denotes body(object with new value)
            const serverResponse = await axios.put(UpdateURL,null,{params})// second 
            console.log(serverResponse.data.status);
            console.log(serverResponse.data.phone)
            const memberPhone = serverResponse.data.phone
            const updateStatus = serverResponse.data.status.modifiedCount
            if(updateStatus>0){
                alert("admission Status confirmed")
                fetchData()

                window.open(
               `https://wa.me/+91${memberPhone}/?text=your%20Addmission%20has been %20confirmed.`,
               '_blank',
               'noopener,noreferrer'
);
            }

        }
        catch(error){
            console.log(error)
        }


    }



    return(
        <>
        <AdminHeader/>
        <h1 style={{textAlign:'center', fontFamily:"cursive", color:"blue",marginTop:"50px", marginBottom:"10px"}}>💻All Pending Admission📌</h1>

        <table className="table table-bordered w-75 mx-auto mt-4">
            <thead>

                <tr>
                    
                 <th style={{fontFamily:"cursive"}}>Pic</th>
                 <th style={{fontFamily:"cursive"}}>CourseName</th>
                 <th style={{fontFamily:"cursive"}}>CourseFees</th>
                 <th style={{fontFamily:"cursive"}}>EmailAddress</th>
                 <th style={{fontFamily:"cursive"}}>FullName</th>
                 <th style={{fontFamily:"cursive"}}>PhoneNumber</th>
                 <th style={{fontFamily:"cursive"}}>City</th>
                 <th style={{fontFamily:"cursive"}}>Address</th>
                 <th style={{fontFamily:"cursive"}}>Date Of Birth</th>
                 <th style={{fontFamily:"cursive"}}>TransactionNo</th>
                 <th style={{fontFamily:"cursive"}}>Admission Status</th>

                 
                 


                </tr>

            </thead>

            <tbody>
                {
                    pendingData.map((pendingObj)=>{
                        return(
                            <tr key= {pendingObj._id}>
                                <td><img src={`http://localhost:3000/pics/${pendingObj.imageFile}`} alt={pendingObj.fullName} style={{width:"100px", height:"100px"}}/></td>
                                <td>{pendingObj.course.courseName} </td>
                                <td>{pendingObj.course.courseFees} </td>
                                <td>{pendingObj.emailAddress} </td>
                                <td>{pendingObj.fullName} </td>
                                <td>{pendingObj.phoneNumber} </td>
                                <td>{pendingObj.city} </td>
                                <td>{pendingObj.address} </td>
                                <td>{pendingObj.dateOfBirth} </td>
                                <td>{pendingObj.transactionNo} </td>
                                <td>
                                     <button className="btn btn-success" onClick={()=>{
                                        confirmAdmission(pendingObj._id)
                                     }}>Confirm</button>
                                </td>



                            </tr>
                    

                        )
                    })



                }
                
               


            </tbody>


        </table>
        
        </>
    )
}
export default PendingAdmission