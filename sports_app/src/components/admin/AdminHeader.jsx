import { Link, useNavigate } from "react-router-dom"
function AdminHeader()
{
  const navigate = useNavigate()
  const adminLogout=()=>{
    //alert("in function")
    localStorage.removeItem("adminEmail")
    navigate("/admin/adminlogin")

  }
    return(
        <>
        <div style={{backgroundColor:"rgba(17, 51, 48, 0.47)"}}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Sports Academy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin/adminDaskBoard">Home</Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/notice">Notice</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/cource">AddCource</Link>
        </li>

        

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            View
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/admin/allFeedbacks">Feedback</Link></li>
            <li><Link className="dropdown-item" to="/admin/allContacts">Contact</Link></li>
            <li><Link className="dropdown-item" to="/admin/allMemberRegistration">AllMember</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admissions Status
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/admin/allPendingAdmission">Pending</Link></li>
            <li><Link className="dropdown-item" to="/admin/allConfirmAdmission">Confirm</Link></li>
          </ul>
        </li>

        <li className="nav-item">
            <button type="button" class="btn btn-light" onClick={adminLogout}>
                <i className="fas fa-sign-out-alt"></i>
                 Logout
            </button>
            </li>
      
      </ul>
      
    </div>
  </div>
</nav>
</div>


        </>
    )



}

export default AdminHeader