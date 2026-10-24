import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import MemberHeader from "./MemberHeader"
import { useNavigate } from "react-router-dom"





function AllCourses()
{
    const APIURL ="http://localhost:3000/member/allCourses"


    const [course,setCourseData] = useState([])
    const navigate = useNavigate()
    const MemberObj = JSON.parse(localStorage.getItem("memberInfo")) // fetching member object

    const fetchData = async()=>{
        try{
            const serverResponse = await axios.get(APIURL)
            const coursesData = serverResponse.data.allCourses

            setCourseData(coursesData)
            console.log(coursesData)
        }

        catch(error){
            console.log(error)
        }
        
       
    }

     useEffect(()=>{
            fetchData()

        },[])

        const enrollment=(courseObj)=>{
            navigate("/member/enrollCourse",{state:{course:courseObj,memberEmail:MemberObj.emailAddress}})

        }

        

    return(
        <>
            <MemberHeader/>
       
        <h1 style={{textAlign:'center', fontFamily:"cursive", color:"blue",marginTop:"100px", marginBottom:"50px"}}>🏑🏒🎳🏸Courses Details🏏🏐⚽</h1>
<body>
    
        <table  className="table table-bordered w-75 mx-auto mt-4">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Course Duration</th>
                    <th>Course Fees</th>
                    <th>Sports Name</th>
                    <th>Description</th>
                    <th>Select</th>

                </tr>
              


            </thead>

            <tbody>
                {
                    course.map((courseObj)=>{
                        return(
                            <tr key={courseObj._id}>
                                <td>{courseObj.courseName}</td>
                                <td>{courseObj.courseDuration}</td>
                                <td>{courseObj.courseFees}</td>
                                <td>{courseObj.sportsName}</td>
                                <td>{courseObj.description}</td>
                                <td>
                                    <button className="btn btn-success" onClick={()=>{
                                        enrollment(courseObj)}}>enrollNow</button>
                                </td>
                            </tr>
                        )
                    })
        
                }
            </tbody>

        </table>
</body>


        

        </>
    )
}
export default AllCourses