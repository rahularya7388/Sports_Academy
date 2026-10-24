import axios from "axios"
import { useState } from "react"
import Header from "../Header"
function MemberRegistration()
{
     const APIURL = "http://localhost:3000/registrationlogin/registration"
        let[registration,setRegistration] = useState({
        emailAddress:"",
        password:"",
        name:"",
        phoneNumber:""
    })

    function useData(e){
        setRegistration({...registration, [e.target.name]: e.target.value})
        console.log(registration)
    }

    async function SubmitForm(e){
        e.preventDefault()

        try{
            const serverResponse = await axios.post(APIURL,registration)
            alert(serverResponse.data.message)
            
            setRegistration({
                 emailAddress:"",
                 password:"",
                 name:"",
                 phoneNumber:""
            })
        }
        catch(error){
        console.log(error)
        }

    }
    const bgStyle ={
            backgroundImage:'url(/images/registration.jpg)',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            minHeight:'100vh',

        }

    return (
        <>
        <Header/>        

        <div style={bgStyle}>
            

                <div style={{width: "400px", height: "450px", backgroundColor:"rgba(214, 164, 120, 0.65)", borderRadius: "10px", margin: "auto", marginTop: "70px" }}>

                    <h3 style={{ textAlign: "center", color: "rgba(226, 17, 17, 0.99)", fontFamily: "cursive", marginTop: "10px", textDecoration:"underline" }}>Registration Your self</h3>

                    <div>
                    <form onSubmit={SubmitForm}>
                       <div className="mb-3" style={{ margin: "10px" }}>
                                <label htmlFor="emailAddress" className="form-label" style={{ color: "Blue" }}>emailAddress</label>
                                <input type="text" name="emailAddress" className="form-control" placeholder="Enter your email" required value={registration.emailAddress} onChange={useData}/>
                          </div> 

                         <div className="mb-3" style={{ margin: "10px" }}>
                                <label htmlFor="password" className="form-label" style={{ color: "Blue" }}>password</label>
                                <input type="text" name="password" className="form-control" placeholder="Enter your password" required  value={registration.password} onChange={useData}/>
                         </div> 
                                                              

                         <div className="mb-3" style={{ margin: "10px" }} >
                                    <label htmlFor="cname" className="form-label" style={{ color: "Blue" }}>Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="Enter your Name" required value={registration.name} onChange={useData} />
                            </div>

                          <div className="mb-3" style={{ margin: "10px" }}>
                              <label htmlFor="phoneNumber" className="form-label" style={{ color: "Blue" }}>phoneNumber</label>
                              <input type="text" name="phoneNumber" className="form-control" placeholder="Enter your Phone Number" required value={registration.phoneNumber} onChange={useData}/>
                        </div>

                        <div style={{textAlign:"center"}}>
                              <button type="submit" className="btn btn-danger">Submit</button>

                        </div>                                               
                        </form>
                    </div>

                </div>

            </div>


        </>
    )


}
export default MemberRegistration