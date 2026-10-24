import { Link, useNavigate } from 'react-router-dom'
//import { toast } from 'react-toastify'
function MemberHeader() {
 const navigate=useNavigate()

   const memberLogout=()=>{
    localStorage.removeItem("memberEmail")
    localStorage.removeItem("memberInfo")


    navigate("/member/memberLogin")

    //toast.success("Logged out successfully!👍👍");
    

    
    
    // toast.success("Success!", {
    //     style: {
    //       backgroundColor: 'pink',
    //       color: 'white',
    //       fontSize: '16px',
    //       fontWeight: 'bold'
    //     },
    //     icon: "👍"
    //   });
      

   
   }
 


    return (<>
        <nav className="navbar navbar-dark  fixed-top"  style={{backgroundColor:"#a7afff"}} >
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand mx-auto" to="#"><i className="fas fa-user-circle"></i> Sports Academy</Link>
    </div>
</nav>


<div className="offcanvas offcanvas-start" style={{backgroundColor:"#a7afff",width:"20%",marginTop:"50px"}} tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarMenuLabel" style={{color:"navy"}}><i className="fas fa-user"></i> Hello Member!</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    
    <div className="offcanvas-body">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-white" to="/member/memberHome"><i className="bi bi-house-door"></i> 
                Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/member/editProfile">
                <i className="fas fa-user-edit"></i> Edit Profile</Link>
            </li>


            <li className="nav-item">
                <Link className="nav-link text-black" to="/member/allCourses">
                <i className="fas fa-user-edit"></i> View Courses</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link text-black" to="/member/admissionDetails">
                <i className="fas fa-user-edit"></i> Admission Details</Link>
            </li>


            <li className="nav-item">
                <Link className="nav-link text-black" to="/member/feedback"><i className="fas fa-comments"></i> Give Feedback</Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link text-white" to="/member/membercontact"><i className="fas fa-tasks"></i> 
                Contact Us</Link>
            </li>

             

            


            <li className="nav-item">
            <button type="button" class="btn btn-light" onClick={memberLogout}>
                <i className="fas fa-sign-out-alt"></i>
                 Logout
            </button>
            </li>
        </ul>
    </div>
</div>
</>
    )
      }
      


export default MemberHeader
