import { useState } from "react"
// import { useActionData } from "react-router-dom"
function EventDemo()
{
    let [text,setText]= useState("Rahul")// return an array
    //set text is also known as update function
    // text initial value is hello --> text is a state variable 
    let [number,setNumber] = useState(1)
    let[cl,setcl]= useState("red")


    function show(){
        setText("Rahul Arya") //updating the value of text
        
    }

    function increase(){
        setNumber(number+1)
        console.log(number)
    }

    function descrease(){
        setNumber(number-1)
        console.log(number)
    }

    function changeColor(){
        setcl("green")
    }

    return(
        <>
        <h1>Event Demo Example</h1>
        <div>
        <button onClick={show}>showTest</button>
        <h1>Hello {text}</h1>

        <h2>Value of the number is {number}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={descrease}>Descrease</button>
        <button onClick={changeColor}>Change Color</button>

        <h1 style={{color:cl}}> Hello User</h1>
        </div>

        </>
    )
}
export default EventDemo