import { useState } from "react"
import axios from "axios"
import MemberHeader from "./MemberHeader"
function FeedBack()
{
    const APIURL ="http://localhost:3000/member/feedback" //given by backend coder

    let[feedBack,setFeedBack] = useState({
        name:"",
        email:"",
        review:"",
        EnterYourResponse:"",
        rating:""

    })

    function useData1(e)
    {
        setFeedBack({...feedBack,[e.target.name]: e.target.value})
        console.log(feedBack)
        

    }

    async function submitForm2(e)
    {
        e.preventDefault() //it prevent from submiting the form on the server side

        try{
           const serverResponse =  await axios.post(APIURL,feedBack) // sending request along with data on backend URL

        //    console.log("Response given by server "+serverResponse)
        console.log(serverResponse.data.message);
        alert(serverResponse.data.message)

        setFeedBack({
            name:"",
            email:"",
            review:"",
            EnterYourResponse:"",
            rating:""
        })


        }
        catch(error){
            console.log(error);
        }

        // alert(feedBack.name+feedBack.email+feedBack.review+feedBack.rating+feedBack.EnterYourResponse)

    }

    const bgStyle1 ={
            backgroundImage:'url(/images/backgroundFeedback.jpg)',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            minHeight:'100vh'

        }
    return (
        <>
        <MemberHeader/>
            <h4 className="mb-4" style={{ textAlign: "center", color: "red", fontFamily: "cursive", textDecoration:"underline"}}>Your Feedback is valuable for us</h4>
            <div className="container bg-light" style={{ maxWidth: "400px" }}>

                <div style={bgStyle1}>
                    

                <form onSubmit={submitForm2}>
                    
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={{ color: "Blue" }}>Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter your name" required  value={feedBack.name} onChange={useData1}/>
                        </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ color: "Blue" }}>Email</label>
                        <input type="text" name="email" className="form-control" placeholder="Enter your email" required value={feedBack.email} onChange={useData1}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="reveiw" className="form-label" style={{ color: "Blue" }}>Reveiw</label>
                        <textarea name="review" className="form-control" placeholder="Enter reveiw" required value={feedBack.review} onChange={useData1} />
                    </div>

                    
                       <div className="mb-3" style={{color:"blue"}}> Rating</div>

                       <div className="mb-3">
                       <select                       
                        className="form-select" name="rating" aria-label="Default select example" value={feedBack.rating} onChange={useData1}>
                            <option value="">rating</option>
                            <option value="1">⭐ </option>
                            <option value="2">⭐⭐ </option>
                            <option value="3">⭐⭐⭐ </option>
                            <option value="4">⭐⭐⭐⭐ </option>
                            <option value="5">⭐⭐⭐⭐⭐ </option>
                        </select>
                        </div>
                  

                    <div className="mb-3">
                        <label htmlFor="reveiw" className="form-label" style={{ color: "Blue" }}>EnterYourResponse </label>
                        <textarea name="EnterYourResponse" className="form-control" placeholder="Enter response" required value={feedBack.EnterYourResponse} onChange={useData1} />
                    </div>
                    <div className="text-center" style={{margin:"5px"}}>
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>


                </form>
                </div>
                

            </div>


        </>
    )
}
export default FeedBack