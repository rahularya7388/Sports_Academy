import axios from "axios"
import { useState } from "react"
import AdminHeader from "./AdminHeader"
function Cource()
{
    const APIURL = "http://localhost:3000/admin/addCourse"
    let [courseData,setCourseData] = useState({
        courseName:"",
        courseDuration:"",
        courseFees:"",
        sportsName:"",
        description:""


    })

    function fetchData(e)
    {
        // console.log(e);
        // console.log(e.target.name)
        // console.log(e.target.value)

        setCourseData({...courseData, [e.target.name]:e.target.value})
        //to set the attribute value in courseData object dynamically

        console.log(courseData)

    }
   async function submitForm(e)
    {
        e.preventDefault() //it prevent from submiting the form on the server side

        // alert(courseData.courseName+courseData.courseFees+courseData.courseDuration+courseData.description+courseData.sportsName)
        try{
         const serverResponse = await axios.post(APIURL,courseData)
         alert (serverResponse.data.message)

         setCourseData({
             courseName:"",
             courseDuration:"",
             courseFees:"",
             sportsName:"",
             description:""
         })

        }
        catch(error){
        console.log(error);

        }

    }



    return(
        <>

        <AdminHeader/>
       
        <h4 className="mb-4" style={{color:"Red", textAlign:"center", fontFamily:"cursive", textDecoration:"underline"}}>Add the Detailes of Cource From Here</h4>

        <div className="container bg-light" style={{maxWidth:"400px"}}>

           <form onSubmit={submitForm}>
            <div className="mb-3">
                <label htmlFor="courseName" className="form-label" style={{color:"Blue"}}>CourseName</label>
                <input type="text" name="courseName" className="form-control" placeholder="Enter your courseName" required value={courseData.courseName} onChange={fetchData}/>
            </div>

             <div className="mb-3">
                <label htmlFor="courseDuration" className="form-label" style={{color:"Blue"}}>courseDuration</label>
                <input type="text" name="courseDuration" className="form-control" placeholder="Enter your cource Duration" required value={courseData.courseDuration} onChange={fetchData}/>
            </div>

            <div className="mb-3">
                <label htmlFor="courseFees" className="form-label"style={{color:"Blue"}}>courseFees</label>
                <input type="text" name="courseFees" className="form-control" placeholder="Enter your cource Fees" required value={courseData.courseFees} onChange={fetchData}/>
            </div>

            <div className="mb-3">
                <label htmlFor="sportsName" className="form-label"style={{color:"Blue"}}>sportsName</label>
                <input type="text" name="sportsName" className="form-control" placeholder="Enter your sports name" required value={courseData.sportsName} onChange={fetchData}/>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label"style={{color:"Blue"}}>description</label>
                <textarea name="description" className="form-control" placeholder="Enter description" required value={courseData.description} onChange={fetchData}/>
            </div>

            
            <div className="text-center">
                <button className="btn btn-success" type="submit">AddCource</button>
            </div>



           </form>


        </div>

      
        </>


    )
}
export default Cource