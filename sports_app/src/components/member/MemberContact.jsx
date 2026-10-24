import axios from "axios"
import { useState } from "react"
import MemberHeader from "./MemberHeader"
function MemberContact()
{
    const APIURL = "http://localhost:3000/component/contact"


    let[contactData,setContactData] = useState({

        name:"",
        emailAddress:"",
        phoneNumber:"",
        enterQuestion:""
    })

    function useData(e){

        setContactData({...contactData, [e.target.name]:e.target.value})
        console.log(contactData)
    }
    async function submitForm1(e)
    {
        e.preventDefault() //it prevent from submiting the form on the server side

        // alert(contactData.name+contactData.emailAddress+contactData.phoneNumber+contactData.enterQuestion)
        try{
            const serverResponse = await axios.post(APIURL,contactData)
            console.log(serverResponse)
            alert(serverResponse.data.message)

            setContactData({
                name:"",
                emailAddress:"",
                phoneNumber:"",
                enterQuestion:""
            })
        }

        catch(error){
        console.log(error)
        }

    }

    const box ={
        width:"400px",
        height: "450px",
        border : "2px solid black",
        margin: "auto",
        color:"BLUE",
        borderRadius:"10px"

                     
    }

    const header ={
        color : "RED",
        fontSize:"30px",
        textAlign: "center",
        fontFamily:"cursive",
        backgroundColor:"rgba(28, 101, 141, 0.27)"
    }

    const button ={
        textAlign:"center",
        marginLeft:"40%",
        marginTop :"10px",
        marginBottom:"10px"


    }

     const bgStyle ={
            backgroundImage:'url(/images/contactBackground.jpg)',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            minHeight:'100vh',



        }
  


    return(
        <>
        <MemberHeader/>        
        
        <h1 style={header}>Contact Us</h1>

        <div style={bgStyle}>

        <div style={box} >

              <form onSubmit={submitForm1}>  
                
            <div className="mb-3" style={{margin:"10px"}} >
                <label htmlFor="cname" className="form-label" style={{color:"Blue"}}>Name</label>
                <input type="text" name="name" className="form-control" placeholder="Enter your Name" required value={contactData.name} onChange={useData}/>
            </div>

             <div className="mb-3" style={{margin:"10px"}}>
                <label htmlFor="emailAddress" className="form-label" style={{color:"Blue"}}>emailAddress</label>
                <input type="text" name="emailAddress" className="form-control" placeholder="Enter your email" required value={contactData.emailAddress} onChange={useData}/>
            </div>

            <div className="mb-3" style={{margin:"10px"}}>
                <label htmlFor="phoneNumber" className="form-label" style={{color:"Blue"}}>Phone number</label>
                <input type="text" name="phoneNumber" className="form-control" placeholder="Enter your Phone Number" required value={contactData.phoneNumber} onChange={useData}/>
            </div>

            <div className="mb-3" style={{margin:"10px"}}>
                <label htmlFor="phoneQuestion" className="form-label" style={{color:"Blue"}}>Enter Your Question</label>
                <input type="text" name="enterQuestion" className="form-control" placeholder="Enter your Question" required value={contactData.enterQuestion} onChange={useData}/>
            </div>          

            <button style={button} type="submit" className="btn btn-success">Submit</button>

            </form> 



        </div>

        </div>

        
        </>
    )
}
export default MemberContact