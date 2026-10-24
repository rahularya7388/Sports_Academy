import axios from "axios"
import { useEffect, useState } from "react"
import AdminHeader from "../admin/AdminHeader"
import Swal from 'sweetalert2'


function AllMemberRegistration()
{
    const APIURL = "http://localhost:3000/admin/allMemberRegistration"

    const dlMember = "http://localhost:3000/admin/deleteMember"
    
    const[registrationData,setRegistrationData] = useState([])
    const fetchData = async()=>{
        try{
            const serverResponse = await axios.get(APIURL)
            const dataRegistration = serverResponse.data.allMemberRegistrations
            setRegistrationData(dataRegistration)
            console.log(dataRegistration)


        }
        catch(error){
            console.log(error)
        }

    }
    useEffect(()=>{
        fetchData()

    },[])

    //Delete Member 

    const deleteMember = async(deleteMemberId)=>{
        if(window.confirm("Are you Sure delete this member")===true){

            try{
                const params = {memberId:deleteMemberId}
                const serverResponse = await axios.delete(dlMember,{params})
                console.log(serverResponse.data)
                Swal.fire(serverResponse.data.message)
                fetchData()


            }
            catch(error){
                console.log(error)
            }
        }

    }



    return(
        <>
        <AdminHeader/>
        <h1 style={{textAlign:"center"}}>All Registered Member</h1>

        <table className="table table-bordered w-75 mx-auto mt-4">
            <thead>
                <tr>
                    <th style={{fontFamily:"cursive"}}>Email</th>
                    <th style={{fontFamily:"cursive"}}>Password</th>
                    <th style={{fontFamily:"cursive"}}>Name</th>
                    <th style={{fontFamily:"cursive"}}>PhoneNumber</th>
                    <th style={{fontFamily:"cursive"}}>Action</th>


                </tr>
            </thead>


                <tbody>
                    {
                        registrationData.map((registrationObj)=>{
                            return(
                                <tr key ={registrationObj._id}>
                                <td>{registrationObj.emailAddress}</td>
                                <td>{registrationObj.password}</td>
                                <td>{registrationObj. name}</td>
                                <td>{registrationObj. phoneNumber}</td>
                                <td>
                                    <button className="btn btn-danger"
                                    onClick={()=>{
                                    deleteMember(registrationObj._id)}}>Delete</button>
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
export default AllMemberRegistration