import Swal from 'sweetalert2'
import axios from "axios"
import { useState, useEffect } from "react"
import AdminHeader from "./AdminHeader"
function AllContact()
{
    const APIURL = "http://localhost:3000/admin/allContacts"

    const DeleteURL = "http://localhost:3000/admin/deleteContact"

    const[contact,setContact] = useState([])
    const fetchData = async()=>{
        try{
          const serverResponse =  await axios.get(APIURL)
          const contactData = serverResponse.data.allcontacts
          setContact(contactData)
          console.log(contactData);


        }
        catch(error)
        {
           console.log(error);
        }

     }
      
       useEffect(()=>{
        fetchData()
       },[])

       //delete contact

       const deleteContact= async(contactId)=>{
        // alert(contactId)

   if(window.confirm("Are Your sure to delte this contact")===true)
    {

      try{
        const params ={cId:contactId}
        const serverResponse= await axios.delete(DeleteURL,{params})
        console.log(serverResponse.data)
        // alert(serverResponse.data.message+"👍")
        Swal.fire(serverResponse.data.message)

        fetchData()//to access the modified collection
      }

      catch(error){
        console.log(error)
      }

   }

       }
       
    return(
        <>
        <AdminHeader/>
        <h1 style={{textAlign:"center"}}>Contact given by Member</h1>

        <table className="table table-bordered w-75 mx-auto mt-4">
            <thead>
                <tr>
                    <th style={{fontFamily:"cursive"}}>Name</th>
                    <th style={{fontFamily:"cursive"}}>Email</th>
                    <th style={{fontFamily:"cursive"}}>phoneNumber</th>
                    <th style={{fontFamily:"cursive"}}>Question</th>
                    <th style={{fontFamily:"cursive"}}>Action</th>

                    
                </tr>
                </thead>

                <tbody>
                     {
                        
                        contact.map((contactobj)=>{
                            return(
                                <tr key ={contactobj._id}>
                                    
                                    <td>{contactobj.name}</td>
                                    <td>{contactobj.emailAddress}</td>
                                    <td>{contactobj.phoneNumber}</td>
                                    <td>{contactobj.enterQuestion}</td>

                                    <td>
                                   <button className="btn btn-danger"onClick={()=>{
                                    deleteContact(contactobj._id)

                                   }}>Delete</button>
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

export default AllContact