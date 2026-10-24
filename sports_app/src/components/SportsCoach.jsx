function SportCoach({name,experiences,sportsname,pic})
{
    // function aboutCoach(){
    //     alert ("Rahul")
    // }
      const itemStyle2 ={
        width:"250px",
        height:"300px",
        backgroundColor:"aqua",
        border:"2px solid black",
        borderRadius:"10px",
        marginLeft:"15px"

    }
    const textStyle2 ={
        fontSize :"20px",
        fontWeight:"bold",
        color:"blue",
        margin:"10px"

    }
    return(
        <>
        <div style={itemStyle2}>
            <img src={`/images/${pic}`} alt="" style={{width:"50%", height:"100px", borderRadius:"50%", marginLeft:"30%", margin:"auto"}} />
            <p style={textStyle2}>CoachName : {name}</p>
            <p style={textStyle2}>Experiences : {experiences}</p>
            <p style={textStyle2}>SportsName: {sportsname}</p>

            {/* <button className="btn btn-info" onClick={aboutCoach}> About Coach</button> */}


        </div>
        
        
        </>


    )
}
export default SportCoach