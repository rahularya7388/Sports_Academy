import axios from "axios"
import { useEffect, useState } from "react"
import AdminHeader from "./AdminHeader"
import Swal from 'sweetalert2'


function AllFeedBack()
{
    const APIURL = "http://localhost:3000/admin/allFeedBacks"
    const deleteFd = "http://localhost:3000/admin/deleteFeedback"

    const[data,setData] = useState([])
    const fetchData = async()=>{
    
        try{
            const serverResponse = await axios.get(APIURL) // send request to backend
            const feedbackData = serverResponse.data.allfeedbacks // getting data from backend
            //using json key from adminController.js

            setData(feedbackData) // setting data to state varibale
            console.log(feedbackData);

        }
        catch(error)
        {
            console.log(error);
            
        }
        
    }// fetch data closed

        useEffect(()=>{
            fetchData()

        },[])


        //Delete Feedback

        const deleteFeedback = async(feedbackId)=>{

            if(window.confirm("Are you sure delete this feedback")===true){

                try{
                    const params ={fdId : feedbackId }
                    const serverResponse = await axios.delete(deleteFd,{params})
                    console.log(serverResponse.data)

                    Swal.fire(serverResponse.data.message)

                    fetchData() //to access the modified collection
                  
                }
                catch(error){
                    console.log(error);
                    
                }


            }
        }

    return(
        <>
        <AdminHeader/>
        <h1 style={{textAlign:"center"}}>FeedBacks Given by Member</h1>

        <table  className="table table-bordered w-75 mx-auto mt-4">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Review</th>
                    <th>EnterYourResponse</th>
                    <th>Rating</th>                
                    <th>Action</th>                
                </tr>
            </thead>

            <tbody>
                {
                    data.map((feedbackobj)=>{
                        return(
                            <tr key ={feedbackobj._id}>
                                <td>{feedbackobj.name}</td>
                                <td>{feedbackobj.email}</td>
                                <td>{feedbackobj.review}</td>
                                <td>{feedbackobj.EnterYourResponse}</td>
                                <td>{feedbackobj.rating}</td>  

                                <td>
                                    <button className="btn btn-danger"onClick={()=>{
                                    deleteFeedback(feedbackobj._id)}}>Delete</button>                                   
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
export default AllFeedBack
