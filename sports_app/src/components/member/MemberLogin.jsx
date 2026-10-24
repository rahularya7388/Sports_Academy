import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import Header from "../Header"


function MemberLogin()
{
     const APIURL = "http://localhost:3000/member/loginMember"
     const navigate = useNavigate()
 
    let[loginData,setLoginData] = useState({
        username:"",
        password:""
    })
   



    function useData(e){
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

     async function submitForm(e){
        e.preventDefault()

        try{
            const serverResponse = await axios.post(APIURL,loginData)
            console.log("response from server"+serverResponse.data.status)
            // alert(serverResponse.data.message)

            if(serverResponse.data.status === "Ok")
            {
                // alert(serverResponse.data.message)

                Swal.fire({
                          title: 'Login Success',
                          text: serverResponse.data.message,
                          icon: 'success',})


                localStorage.setItem("memberInfo",JSON.stringify(serverResponse.data.memberToken))// convert JsonObject to string
                
                localStorage.setItem("memberEmail",serverResponse.data.memberToken.emailAddress)
                navigate("/member/memberHome")


            }

            else{
                // alert(serverResponse.data.message)
                
                    Swal.fire({
                          title: 'Error!',
                          text: serverResponse.data.message,
                          icon: 'error',})
                
            }



            // const serverStatus = serverResponse.data.status

            // if(serverStatus === "Ok"){
            // }
        }

        catch(error){
            console.log(error)
        }
    }
    return(
        
       <>
       <Header/>
       <div style={{backgroundImage:'url(/images/MemberLoginWallpaper.jpg)',
        backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',flexDirection:"column",minHeight:"100vh",alignItems:"center", justifyContent:"center"}}>

       <div style={{width:"350px", height:"380px", backgroundColor:"rgba(160, 135, 53, 0.4)", margin:"auto", borderRadius:"5px"}}>

        <div style={{textAlign:'center', fontFamily:"inherit",color:"blue",textDecoration:"underline" ,marginTop:"20px" }}>
        <h1 className="mb-3" style={{fontSize:"30px"}}>Member Login</h1>
        </div>

        <form onSubmit={submitForm}>
            <label  htmlFor="username" className="form-label" style={{color:"Blue"}}>UserID: </label>
            <div className="input-group mb-3" >                
                <span  className="input-group-text" id="basic-addon1"><i className="fa-solid fa-envelope"></i></span>
                <input type="email" className="form-control" name="username" placeholder="Username" aria-label="username"
                aria-describedby="basic-addon1" required value={loginData.username} onChange={useData}/>
            </div>
            <label htmlFor="password" className="form-label" style={{color:"Blue"}}>Password: </label>
            <div className="input-group mb-3">
                
                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                <input type="password" className="form-control" name="password" placeholder="enter your password" aria-label="password"
                aria-describedby="basic-addon1" required value={loginData.password} onChange={useData}/>
            </div>

            <div className="form-check" style={{marginTop:"10px"}} >
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label name="check" className="form-check-label" htmlFor="gridCheck">
                    Remember me
                </label>
            </div>

             <div style={{textAlign:"center", marginTop:'20px'}}>

                <button type="submit" className="btn btn-outline-success">Login</button>

            </div>


        </form>

        <div>

        </div>


       </div>

       </div>

       
       </>


    )
}
export default MemberLogin