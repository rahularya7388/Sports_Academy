import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../Header"
import Swal from "sweetalert2"
function AdminLogin()
{
    const APIURL = "http://localhost:3000/login/loginAdmin"
    let [loginData,setLogin] = useState({
        username:"",
        password:""
       

    })
    const navigate = useNavigate()

    function useData(e){
        setLogin({...loginData,[e.target.name]: e.target.value})
       console.log(setLogin)
        

    }
    async function submitForm(e){
        e.preventDefault()
        try{
            const serverResponse = await axios.post(APIURL,loginData)
            // alert(serverResponse.data.message)
            const serverStatus = serverResponse.data.status

            if(serverStatus === "Ok"){
                Swal.fire({
                     title: 'Login Success',
                     text: serverResponse.data.message,
                     icon: 'success',})
                
                localStorage.setItem("adminEmail",serverResponse.data.token)
                navigate("/admin/adminDaskBoard") // to redirect automatocally on Admin Daskboard


            }
            else{
              // alert(serverResponse.data.message)
                            
                Swal.fire({
                     title: 'Error!',
                      text: serverResponse.data.message,
                      icon: 'error',})
                            
                        }
        } 
        catch(error){
            console.log(error)
        }
       
        // alert(login.username+login.password)
    }

    const container ={
        width: "100%",
        // height: "500px",
        // border: "3px solid black" ,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }

    const container2={
        width:"350px",
        height:"380px",
        borderRadius:"5px",
        backgroundColor:"rgba(226, 217, 179, 0.43)"



    }

    return(
        <>
            <Header/>

            <div style={{backgroundImage:'url(/images/adminloginwallpaper.jpg)',
        backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',flexDirection:"column",minHeight:"100vh",alignItems:"center", justifyContent:"center"}}>
        <div style={container}>
        
        <div style={container2}>
             <h1 style={{textAlign:"center",fontFamily:"cursive", fontSize:"20px",color:"blue", marginTop:"5px", textDecoration:"underline"}}> Admin Login</h1>

        <form onSubmit={submitForm}>
            <label htmlFor="username" className="form-label" style={{color:"darkblue"}}>Username: </label>
            <div className="input-group mb-3">                
                <span  className="input-group-text" id="basic-addon1"><i className="fa-solid fa-envelope"></i></span>
                <input type="email" className="form-control" name="username" placeholder="Username" aria-label="Username"
                aria-describedby="basic-addon1" value={loginData.username} onChange={useData}/>
            </div>
            <label htmlFor="password" className="form-label" style={{color:"darkBlue"}}>Password: </label>
            <div className="input-group mb-3">
                
                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                <input type="password" className="form-control" name="password" placeholder="enter your password" aria-label="password"
                aria-describedby="basic-addon1" value={loginData.password} onChange={useData}/>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label name="check" className="form-check-label" htmlFor="gridCheck">
                    Check me out
                </label>
            </div>


            <div style={{textAlign:"center"}}>

                <button style={{color:"blue"}} type="submit" className="btn btn-outline-success">Login</button>

            </div>
            </form>




        </div>


        {/* <div style={{ borderRadius:"2px", width: "350px",height:"380px",border: "2px solid red", marginLeft:"20px"
}}>
            <img src="../images/medal.jpg" style={{width: "100%", height: "100%",}} />

        </div> */}


    </div>
    </div>

        
        </>
    )
}
export default AdminLogin