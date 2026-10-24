import axios from "axios"
import { useEffect, useState } from "react"
import AdminHeader from "./AdminHeader"

function ConfirmAdmission(){
    const APIURL = "http://localhost:3000/admin/allConfirmAdmission"

    const[confirmData,setConfirmData] = useState([])
    const fetchData = async()=>{
        try{
            const serverResponse = await axios.get(APIURL)
            const confirmDatas = serverResponse.data.confirmAdmissionData
            setConfirmData(confirmDatas)
            console.log(confirmDatas)

        }

        catch(error){
            console.log(error)
        }
        
    }

    useEffect(()=>{
        fetchData()
    },[])

    



    return(
        <>
        <AdminHeader/>
        <h1 style={{textAlign:'center', fontFamily:"cursive", color:"blue",marginTop:"50px", marginBottom:"10px"}}>💻All Confirm Admission📌</h1>

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
                 {/* <th style={{fontFamily:"cursive"}}>Admission Status</th> */}
                 
                 


                </tr>

            </thead>

            <tbody>
                {
                    confirmData.map((pendingObj)=>{
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
                                



                            </tr>
                    

                        )
                    })



                }
                
               


            </tbody>


        </table>
        
        </>
    )
}
export default ConfirmAdmission