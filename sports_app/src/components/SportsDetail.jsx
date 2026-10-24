function SportsDetail({name, players,pic})
{
    function aboutSports(spname){


        let utterance=null
        let text =""



        

        // alert("button is clicked"+ " "+spname)i
        if(spname === "cricket")
        {
             text="cricket is a game of 11 players with ball and bat"
             utterance = new SpeechSynthesisUtterance(text)

        }
           
        if(spname === "FootBall")
        {
             text="Footballis a game of 11 players with football"
             utterance = new SpeechSynthesisUtterance(text)

        }
           
        if(spname === "Tennis")
        {
            text="tennis is a game of 2 or 4 players with tennis ball"
            utterance = new SpeechSynthesisUtterance(text)
        }
           
        if(spname === "BadMinton"){
            text="badminton is game of 2 or 4 players with badminton"
            utterance = new SpeechSynthesisUtterance(text)

        }
        window.speechSynthesis.speak(utterance)
           
        }
    const itemStyle ={
        width:"250px",
        height:"270px",
        backgroundColor:"aqua",
        border:"2px solid black",
        borderRadius:"10px",
        marginLeft:"15px"

    }
    const textStyle ={
        fontSize :"20px",
        fontWeight:"bold",
        color:"blue",
        margin:"10px"

    }


    return(
        <>
        <div style={itemStyle}>
            <img src={`/images/${pic}`} alt="" style={{width:"50%", height:"100px", borderRadius:"50%", marginLeft:"30%", margin:"auto"}} />
            <p style={textStyle}>SportsName : {name}</p>
            <p style={textStyle}>No of PlayersName : {players}</p>
            <button  className="btn btn-success" onClick={()=>{
                //body of call back function
                aboutSports(name)

            }}>About Sports</button>

        </div>

        

        </>

    )

}
export default SportsDetail