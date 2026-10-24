import AdminHeader from "./AdminHeader"

function AdminDaskBoard()
{
    const emailId = localStorage.getItem("adminEmail")
    return(
        <>
        <AdminHeader/>
        <h1 style={{marginTop:"50px",textAlign:"center", fontFamily:"monospace"}}>Welcome Admin🙏</h1>
        <h2>Use Your Email Id is :{emailId}</h2>
        
        
        </>
    )
}

export default AdminDaskBoard