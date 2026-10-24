import Header from './components/Header'
import SportsDetail from './components/SportsDetail'
import SportCoach from './components/SportsCoach'
import { useRef,useEffect } from 'react'
function app()
{

  const textRef = useRef(null); // reference to the text element
  const colors = ['red', 'green', 'blue', 'orange', 'purple']; // color list
  let index = 0; // current color index

  //function to change color
  const changeColor = () => {
    if (textRef.current) {
      textRef.current.style.color = colors[index];
     // index = (index + 1) % colors.length; // move to next color (looping)
     index=index+1
     if(index>4)
      index=0
    }
  };

  useEffect(() => {
    // setInterval calls changeColor() every 1 second
    const interval = setInterval(changeColor, 1000);

    // cleanup to stop interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return(
    <>
    <div style={{backgroundColor:"rgba(163, 190, 198, 0.27)", height:"900px"}}>
    <h1 ref={textRef} style={{textAlign:"center", color:"Blue"}}>🙏🎉Sports Academy Welcomes You🏐🏏</h1>
    
    <Header/>
    <marquee behavior="alternate" style={{color:"blue"}}> <h3>⚽🏏Sports We offer🏏⚽</h3></marquee>
       

    <div className="d-flex gap-5 mx-5 mt-5" >
    <SportsDetail name="cricket" players="11" pic ="cricket.jpg"/>
    <SportsDetail name="FootBall" players="11" pic ="football.jpg"/>
    <SportsDetail name="Tennis" players="2 or 4" pic ="tenis.jpg"/>
    <SportsDetail name="BadMinton" players="2" pic ="badmintan.jpg"/>


    </div>

    <h2 style={{textAlign:"center", backgroundColor:"rgba(20, 208, 225, 0.27)", color:"red", marginTop:"30px"}}>Know About our Coaches</h2>

    <div className="d-flex gap-5 mx-5 mt-5" >
    <SportCoach name="Gautam Gambhir" experiences="3 Years" sportsname="Cricket" pic ="gautam.jpg"/>
    <SportCoach name="Marcus Freeman" experiences="5 Years" sportsname="Football" pic ="footballcoach.jpg"/>
    <SportCoach name="Lopez,Marc" experiences="8 Years" sportsname="Tennis" pic ="TenisCoach.webp"/>
    <SportCoach name="Phulela Gopichand" experiences="7 Years" sportsname="Badminton" pic ="badmintanCoach.jpg"/>

    </div>


    </div>


    </>



  )

}

export default app 