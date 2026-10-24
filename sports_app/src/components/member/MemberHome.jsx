import MemberHeader from "./MemberHeader"

function MemberHome()
{

    const MemberObj = JSON.parse(localStorage.getItem("memberInfo")) // fetching member object
    //JSON.parse() convert string to json object

    return(
        <>
        <MemberHeader/>

        <h5 style={{marginTop:"100px", textAlign:"center", fontFamily:"cursive", color:"blue"}}>Hello Member : {MemberObj.name}</h5>
        <h5 style={{textAlign:"center", fontFamily:"cursive", color:"blue"}}>Use Your Contact Number : {MemberObj.phoneNumber}</h5>
        <h5 style={{textAlign:"center", fontFamily:"cursive", color:"blue"}}>Use Your Email : {MemberObj.emailAddress}</h5>
       

        
        
        </>
    )
}
export default MemberHome