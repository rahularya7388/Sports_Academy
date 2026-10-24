import AdminHeader from "./AdminHeader"
function Notice()
 {
    const box1 = {
        width: "500px",
        height: "auto",
        border: "2px solid black",
        margin:"auto",
        color: "BLUE",


    }

    const text2 ={
        width:"100%",
        marginTop:"20px",
    }
     const button1 ={
        textAlign:"center",       
        marginTop :"10px",
        marginBottom:"10px",
        border :"2px solid black",

        
    }

    return (
        <>
            <AdminHeader/>

            <div style={box1}>
                
 
                 <h5 style={{textAlign:"center", fontFamily:"monospace"}}> Add Your Notice Content</h5>
                <div style={text2}>
                <div className="form-floating"> 
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label for="floatingTextarea2">Content</label>
                </div>
                <div/>
                </div>


                <div className="text-center">
                <button style={button1} type="button" className="btn btn-primary" >Submit</button>


               </div>
                </div>



        </>


    )
}
export default Notice