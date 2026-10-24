import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function CoachLogin()
{
    const APIURL ="http://localhost:3000/coach/coachLogin"

    const navigate = useNavigate()


    let [login,setLogin] = useState({
        username:"",
        password:""       

    })

    function useData(e){
        setLogin({...login,[e.target.name]: e.target.value})
        
    //    console.log(setLogin)
        

    }
  async function submitForm(e){
        e.preventDefault() 
        // console.log(login.username);
        // console.log(login.password);
         try{
            const serverResponse = await axios.post(APIURL,login)
            alert(serverResponse.data.message)
            const serverStatus = serverResponse.data.status
            if (serverStatus==="Ok"){
                navigate("/coach/coachDaskBoard")

            }

        }
        catch(error){
            console.log(error)
        }

        // alert(login.username+login.password)
    }

    const container ={
        width: "100%",
        height: "700px",
        border: "3px solid black" ,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }

    const container2={
        width:"40%",
        height:"500px",
        border:"2px solid black"

    }

    return(
        <>

        <div style={container}>
        
        <div style={container2}>
             <h1 style={{textAlign:"center",fontFamily:"monospace", fontSize:"20px",color:"blue"}}>Login</h1>

        <form onSubmit={submitForm}>
            <label htmlFor="username" className="form-label" style={{color:"Blue"}}>Username: </label>
            <div className="input-group mb-3">                
                <span  className="input-group-text" id="basic-addon1"><i className="fa-solid fa-envelope"></i></span>
                <input type="email" className="form-control" name="username" placeholder="Username" aria-label="Username"
                aria-describedby="basic-addon1" value={login.username} onChange={useData}/>
            </div>
            <label htmlFor="password" className="form-label" style={{color:"Blue"}}>Password: </label>
            <div className="input-group mb-3">
                
                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                <input type="password" className="form-control" name="password" placeholder="enter your password" aria-label="password"
                aria-describedby="basic-addon1" value={login.password} onChange={useData}/>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label name="check" className="form-check-label" htmlFor="gridCheck">
                    Check me out
                </label>
            </div>


            <div style={{textAlign:"center"}}>

                <button type="submit" className="btn btn-outline-success">Login</button>

            </div>
            </form>




        </div>


        <div style={{width: "40%",height:"500px",border: "2px solid red", marginLeft:"20px"
}}>
            <img src="../images/16.jpg" style={{width: "100%", height: "100%",}} />

        </div>


    </div>

        
        </>
    )
}
export default CoachLogin